import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
const PlaysFilter = (props) => {
  return (
    <Disclosure>
    {({ open }) => (
      <>
      <div className="bg-kanishka-60 w-3/4 my-4">
      <div className="w-3/4 p-4 ">
      <Disclosure.Button className="py-2 flex items-center gap-3">
      {open ? <BiChevronUp /> : <BiChevronDown />}

       <span className={open ? "text-red-600" : "text-gray-700"}>
        {props.title}
       </span>

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 text-sm">
        <div className="flex item-center gap-2 flex-wrap ">
         {props.tags.map((tag) => (
           <>
            <div className="border border-gray-300 p-1">
            <span className="text-red-600">{tag}</span>
            </div>
           </>
         ))

         }
        </div>
      </Disclosure.Panel>
      </div>
      </div>
      </>
    )}
    </Disclosure>
  );
};

export default PlaysFilter;
