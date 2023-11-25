## Problem Statement

Build a game in which a player needs to match a country to it's capital by clicking on appropriate buttons.

1. Your component should recieve a data property in the following fomat (an object with the correct answer, 
   where the keys are names of countries and the value of each key is the capital of country):

   <CountryCapitalGame data={{Bharat : "New Delhi", Russia : "Moscow"}}>

2. A button should be displayed for each country and each capital so the example above would return buttons:
   
   Bharat, New Delhi, Russia, Moscow

3. The buttons should be displayed in a random order.
   
4. Clicking a button should set it's background color to blue (#009BFF)

5. Clicking another button should:
   
   - remove both buttons if a correct country and capital pair has been selected;
   - set the background color of both buttons to red (#RREEEE) if a wrong pair has been selected.

6. Assuming the previously selected pair was wrong, clicking another button should restore the default
   background color of the wrong pair and set the background color of the clicked button to blue (as above)

7. When there are no buttons left, display a message : Congratulations.
   
8. Export your component as the default export
   
### Assumptions :

Assume the provided data is correct (all the data object keys and values are strings).

### Note : 

The look of the component won't be evaluated; only it's specified functionalities will be tested.
