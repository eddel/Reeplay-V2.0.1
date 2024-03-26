import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={19}
    height={19}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={19} height={19} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_3870_2" transform="scale(0.0111111)" />
      </Pattern>
      <Image
        id="image0_3870_2"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmklEQVR4nO3bPWsUURTG8ZM1qFFBsRI7BbH0G2jhy+eyshBJAlZBieAHULAQsVAQLWwtxMLOSkQjUUn5l2tudBiS2dm5L2fdeX595pw8nJ25M3PHTEREREREREREREREREREFh9w07uHhQYsAWsA3r0sLOAQcD+ErKDLhbwMPNwLWUGXCfkI8LgZsoLOH/Jx4Hk7ZAWdN+RTwJv9QlbQ+UI+Dbw9KGQFnSfkM8C7rpAVdHrI54CP00IOEuusABvAT+ALcDtcdFP7b13A7wBfY41Qa8XmAXAR+ERPllYr/ONtT3OEHUMOx2rbMG/AJeBz35CDxLvLH+wvKeyOkIPtocdtF7kB3AM+xJ9LUZbW63bHoQeFPSXk4HuOn/wrKrO0nv88L8kVdo+Qg9WUhq8AWziwBD2D6RV2zmN1TbJLyMGgpjMHVDzkWOQljiwD4DDwZEqpZ8DRnH87S4PXcWaZDJnKKpMcC/19LuzFMpplOqtMcqOxsIRzZZnNMKXlJ7nR1EEL/mqsgJ7TWn6SGw25s0ISws4bcmzGnRU0IOz8IcdG3FlhM4RdJuTYhDsrTEFHcxLyHp06/veLoZZ3lZZ3umGpdMMSHvC7spHcgl/DmY3hoVIs9gJHNobHpLHQ+fiq3oUlyhFUzbAvA99wYGN5ldUodMHjbYul9XzX4eXsekrPzWJX48aU9zXW2Ta8zwnwy2G7QchkyUa0gWYC7OQMuWfYoebERrYl7EHukHuEvWkj3OR4Ioa9E3/SawU2Oa7HY4cam6GmzRPgbDzPd8pUq+g5M+7z8z0vd9FG9IqAk8DrkhMt/8I+po+FKmH3wvJIE10n7GV90FkJ+kS5HnaXS6u6GNYL/FatWiIiIiIiIiIiIiIiIiIiYovtN/F9pDi1VD8AAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default SVGComponent;
