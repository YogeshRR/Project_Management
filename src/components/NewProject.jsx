import { useRef } from "react";

import Input from "./Input";
import Modal from "./Model";
import { headerStyle, paragraphStyle } from "./constant";

export default function NewProject ({onAdd, onCancel}) {
 
    const modal = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
      const enteredTitle = titleRef.current.value;
      const enteredDescription = titleRef.current.value;
      const enteredDueDate = dueDateRef.current.value;

      if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
      }

      onAdd ( {
        titleRef : enteredTitle,
        descriptionRef : enteredDescription,
        dueDateRef : enteredDueDate,
        }
       );
    }

    return <>  <Modal ref={modal} buttonCaption = 'Okay'> 
                <h2 className={headerStyle}>Invalid Input</h2>
                <p className={paragraphStyle}>oops ... you forgot to enter a value </p>
                <p className={paragraphStyle}>Please make sure you provided valid value for every input field.</p>
            </Modal>     
             <div className="w-[35rem] ml-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
            </li>
            <li>
                <button onClick={handleSave} className="px-6 by-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </li>
        </menu>
        <div>
            <Input type = 'text' ref={titleRef} label="Title" />
            <Input ref={descriptionRef} label="Description" isTextArea />
            <Input type = 'date' ref={dueDateRef} label="Due Date"/>
        </div>
    </div>
    </>

}