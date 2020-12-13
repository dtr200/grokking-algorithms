class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node == null){
            this.root = new Node(data);
            return;
        }
        else{
            const searchTree = (node) => {
                if(data < node.data){
                    if(node.left == null){
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left != null){
                        return searchTree(node.left)
                    }
                }
                else if(data > node.data){
                    if(node.right == null){
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right != null){
                        return searchTree(node.right);
                    }
                }
                else{
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    min(){
        let current = this.root;
        while(current.left !== null)
            current = current.left;
        return current.data;
    }

    max(){
        let current = this.root;
        while(current.right !== null)
            current = current.right;
        return current.data
    }

    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data)
                current = current.left;
            else if (data > current.data)
                current = current.right;
            else if(data === null)
                return null;
        }
        return current;
    }

    isPresent(data){
        let current = this.root;
        while(current.data != data){
            if(data === current.data)
                return true;
            if(data > current.data)
                current = current.right;
            else
                current = current.left;
        }
        return false;
    }

    remove(data){
        const removeNode = (node, data) => {
            if(node == null)
                return null;
            if(data == node.data){
                //без потомков
                if(!node.left && !node.right)
                    return null;
                //без потомков справа
                if(!node.right)
                    return node.left;
                //без потомков слева
                if(!node.left)
                    return node.right;
                /*есть потомки с двух сторон*/

                //выбираю самое малое число из правой ветки
                let tempNode = node.right;
                while(tempNode.left !== null)
                    tempNode = tempNode.left;
                //ставлю на место удаленной ноды
                node.data = tempNode.data;
                node.right = removeData(node.right, tempNode.data);
                return node;
            }
            else if(data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }
            else{
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}