import React from 'react';
import { Menu } from "./Menu";
import { EventsExample } from "./EventsExample";
import { Checkbox } from "./state/Checkbox";
import { Todolist } from "./state/Todolist";
import { Todos } from "./state/Todos";
import { UncontrolledField } from "./fields/UncontrolledField";
import { ControlledTextField } from "./fields/ControlledTextField";
import { ControlledTextareaField } from "./fields/ControlledTextareaField";

export function Lesson() {
  return (
    <div className="">
      {/*<EventsExample />*/}
      <Checkbox>Has photo</Checkbox>
      {/*<Todolist />*/}
      {/*<Todos />*/}
      {/*<ControlledTextField />*/}
      {/* <ControlledTextareaField /> */}
    </div>
  );
}
