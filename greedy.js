/* statesNeeded - список требуемых шатов, stations - станции и штаты вещания*/

const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']),
	  stations = {
				'kone': new Set(['id', 'nv', 'ut']),
				'ktwo': new Set(['wa', 'id', 'mt']),
				'kthree': new Set(['or', 'nv', 'ca']),
				'kfour': new Set(['nv', 'ut']),
				'kfive': new Set(['ca', 'az'])
			    };

class Greedy {
  constructor(states, stations){
    this.statesNeeded = states;
    this.stations = stations;
	this.finalStations = new Set(); // Финальный список станций
  }
  
	calc(){
		if(!(this.statesNeeded instanceof Set)) return;
		while(this.statesNeeded.size){

            /* bestStation - такущая лучшая станция, statesCovered - текущее лучшее покрытие */
			let bestStation = null,
				statesCovered = new Set();
			for(let i in this.stations){
                /* Выбираю в covered те штаты, что есть в текущем this.stations[i] и в this.statesNeeded */
                const covered = new Set([...this.stations[i]].filter(i => [...this.statesNeeded].includes(i)));
                /* Если список собранных штатов больше, чем то, что было до этого момента в statesCovered, то нынешняя станция лучше. Сохраняю */
				if(covered.size > statesCovered.size){
					bestStation = i;
					this.stations[i].forEach(el => statesCovered.add(el));
				}
            };
            /* Добавляю эту станцию в список */
            this.finalStations.add(bestStation);
            /* Убираю обработанные штаты из списка this.statesNeeded */
			statesCovered.forEach(i => this.statesNeeded.delete(i));
		}
		return this.finalStations;
	}
}

const check = new Greedy(statesNeeded, stations);
console.log(check.calc())