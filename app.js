// BUDGET CONTROLLER
var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
      var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
      
        var allExpenses = [];
        var allIncomes = [];
        var totalExpenses = 0;
    
    // Better to have a data structure that groups together (vs having a bunch of separate arrays to track)
        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: [],
                inc: []
            }
        }
        
    // 
        return {
            addItem: function(type, des, val) {
                var newItem, ID;
                
                // Create new ID
                if (data.allItems[type].length > 0) {
                    ID = data.allItems[type][data.allItems[type].length-1].id + 1;
                } else {
                    ID = 0;
                }
                
              
                // Create new item based on 'inc' or 'exp' type
                if (type === 'exp') {
                    newItem = new Expense(ID, des, val);
                } else if (type === 'inc') {
                    newItem = new Income(ID, des, val);
                }
                
                // Push it into our data structure
                data.allItems[type].push(newItem);
                
                // Return the new element
                return newItem;
            },
            
            testing: function() {
                console.log(data);
            }
        }
})();


// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
 return {
     getInput: function() {
         return {
             type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
             description:document.querySelector(DOMstrings.inputDescription).value,
             value: document.querySelector(DOMstrings.inputValue).value
         }
     },
     
     getDOMstrings: function() {
             return DOMstrings;
         }
     
 }
    
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        
        // Action to be taken once the add button (checkmark) is clicked or 
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        // Add Event Listener to the global object (browser window) so that we can dictate what happens when the user presses a key
        document.addEventListener('keypress', function(event) {
        //console.log(event);
        
        // if the user presses enter (some browsers don't use keyCode, so which helps cover those browsers as well)
        if (event.keyCode === 13) {
            if (event.keyCode === 13 || event.which === 13) {
                  ctrlAddItem();
            }
        } 
    })
        
    }
    
    var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get the field input data
        input = UICtrl.getInput();
        // console.log(input);
        
        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type,input.description,input.value); 
        
        // 3. Add the item to the user interface 
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        
    }
    
    return {
        init: function() {
            console.log('Application has started')
            setupEventListeners();
        }
    }
    
})(budgetController,UIController);

// Event listeners
controller.init();