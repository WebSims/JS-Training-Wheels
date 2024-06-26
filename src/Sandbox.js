import React from "react"
import Code from './components/Code'
import { Unary, Binary, Ternary, FromVariable, FromPropByStaticName, FromPropByDynamicName, FunctionCall } from './components/cheat-sheet/expressions'
import { Number, Boolean, String, Null, Undefined, Object, Array, Function, ArrowFunction } from './components/cheat-sheet/data'

const code1 = `
2*3+4
  a++
  2*(3+4
    );
    (2*((3+(((4))))))
    const z = (x) => x ** 2
  console.log(1,2, "Hello, " + name)
  console.log(1,something == "xxx" ? myArr[i+1] : false)
  //something == "xxx" ? myArr[i+1] : false
  const emptyArray = []
  const emptyObject = {}
  const array = [1, 2, 3]
  const object = {name: "John", age: 2, isMale: true, nestedProp: object["name"]}
`

export default function Sandbox() {

    return (
        <div className="h-screen">
            <div className={`flex flex-row h-screen w-full `}>

                <div className="w-3/5 h-screen bg-gray-200 left-side">
                    <div className="h-full overflow-auto" style={{ height: '70%', scrollbarWidth: 'thin' }}>
                        <h2 className='font-bold m-2'>Code Editor</h2>
                        <div>
                            {/* <textarea value={code1} rows={5} /> */}
                            <Code fromAstOf={code1} />
                        </div>
                    </div>

                    <div className="h-full overflow-auto flex" style={{ height: '30%', scrollbarWidth: 'thin' }}>
                        <div style={{ width: '33.33%', backgroundColor: '#d1d5db', overflow: 'auto', scrollbarWidth: 'thin' }}>

                            <div className='p-5'>
                                <p className='font-bold cs-st'>
                                    Statements
                                </p>

                                <ul className="list-disc ml-4">
                                    <li><span className='cs-st-exp'>Evaluate Single Expression</span>
                                        <ul className="list-disc ml-4">
                                            <li>Useful: e.g. function calls and assignments</li>
                                            <li>Useless: e.g. data & data evaluations</li>
                                        </ul>
                                    </li>
                                    <li><span className='cs-st-dec-and-assign'>Declaration</span>
                                        <ul className="list-disc ml-4">
                                            <li>Declare a Variable (within a scope)</li>
                                            <li>Declare and Assign (initial value)</li>
                                            <li>Declare a Named Function</li>
                                        </ul>
                                    </li>
                                    <li> <span className='cs-st-cond'>Conditional</span>
                                        <ul className="list-disc ml-4">
                                            <li>If</li>
                                            <li>Else</li>
                                            <li>Switch</li>
                                        </ul>
                                        <li> <span className='cs-st-cond-loop'>
                                            Loop
                                        </span>
                                            <ul className="list-disc ml-4">
                                                <li>
                                                    <span className='cs-st-cond-loop-for'>For</span>
                                                </li>
                                                <ul className="list-disc ml-4">
                                                    <li>3 Statements</li>
                                                    <li>For-in</li>
                                                    <li>For-of</li>
                                                </ul>
                                                <li>While
                                                    <ul className="list-disc ml-4">
                                                        <li>While</li>
                                                        <li>Do-while</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className='cs-st-exception'>Code flow control</span>
                                        </li>
                                        <ul className="list-disc ml-4">
                                            <li>Return</li>
                                            <li>Throw</li>
                                            <li>Break</li>
                                            <li>Continue</li>
                                        </ul>
                                        <li>
                                            <span className='cs-st-exception'>Error Handling</span>
                                        </li>
                                        <ul className="list-disc ml-4">
                                            <li>Try-Catch</li>
                                            <li>Try-Catch-Finally</li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div style={{ width: '33.33%', backgroundColor: '#d1d5db', overflow: 'auto', scrollbarWidth: 'thin' }}>
                            <div className='p-5'>
                                <p className='font-bold cs-exp'>
                                    Expressions
                                </p>
                                <ul className="list-disc ml-4">
                                    <li>
                                        <span className='cs-exp-read'>Read variable</span>
                                        <ul className="list-disc ml-4">
                                            <li> <FromVariable /> </li>
                                            <li>
                                                <span className='cs-exp-read-prop'>From property</span>
                                                <ul className="list-disc ml-4">
                                                    <li> <FromPropByStaticName /> </li>
                                                    <li> <FromPropByDynamicName /> </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li> <FunctionCall /> </li>
                                    <li>
                                        <span className='cs-exp-op'>Operation</span>
                                        <ul className="list-disc ml-4">
                                            <li><Unary /></li>
                                            <li><Binary /></li>
                                            <li><Ternary /></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '33.33%', backgroundColor: '#d1d5db', overflow: 'auto', scrollbarWidth: 'thin' }}>
                            <div className='p-5'>
                                <p className='font-bold cs-data'>
                                    Data
                                </p>
                                <ul className="list-disc ml-4">
                                    <li><Number /></li>
                                    <li><Boolean /></li>
                                    <li><String /></li>
                                    <li><Null /></li>
                                    <li><Undefined /></li>
                                    <li><Object /></li>
                                    <li><Array /></li>
                                    <li><Function /></li>
                                    <li><ArrowFunction /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-2/5 h-screen bg-gray-200">
                    <div style={{ height: '30%', backgroundColor: '#d1d5db', overflow: 'auto', scrollbarWidth: 'thin' }}>
                        <h2 className='font-bold m-2'>Console (Outputs of code execution)</h2>
                    </div>
                    <div style={{ height: '70%', backgroundColor: 'white' }}>
                        <h2 className='font-bold m-2'>Memory Model (updates on execution steps)</h2>
                        <p>
                            <img src="/memory-model-demo.png" style={{ width: 500, padding: 20 }} />
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}
