// BUDGET CONTROLLER
var budgetController = (function() {
    
    
})();


// UI CONTROLLER
var UIController = (function() {
    
 // Some code
    
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
        // 1. Get the field input data
        
        // 2. Add the item to the budget controller 
        
        // 3. Add the item to the user interface 
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        
        console.log('Button was pressed or enter was pressed');
    }
    
 // Action to be taken once the add button (checkmark) is clicked or 
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
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
    
})(budgetController,UIController);