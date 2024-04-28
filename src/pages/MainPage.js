import React from 'react';
import { LivePortal } from '../components/LivePortal';
import { Unary, Binary, Ternary, FromVariable, FromPropByStaticName, FromPropByDynamicName, FunctionCall } from '../components/expressions';
import { Number, Boolean, String, Null, Undefined, Object, Array, Function, ArrowFunction } from '../components/data';

function MainPage() {

    return (
        <div className="h-screen">
            <div className={`grid grid-cols-5 h-screen w-full parent`}>
                <div className="col-span-3 h-screen bg-gray-200">
                    <div className="h-[70%] overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                        <LivePortal />
                    </div>

                    <div className="h-[30%] bg-gray-400 flex">
                        <div className="w-[33.33%]  bg-gray-300 overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                            <div className='p-5'>
                                <p className='font-bold'>
                                    Statements kinds
                                </p>

                                <ul className="list-disc ml-4">
                                    <li>Expression
                                        <ul className="list-disc ml-4">
                                            <li>Useless</li>
                                            <li>Useful</li>
                                        </ul>
                                    </li>
                                    <li>Declaration / assignment
                                        <ul className="list-disc ml-4">
                                            <li>Assign only</li>
                                            <li>Useful</li>
                                            <li>Declare & assign</li>
                                        </ul>
                                    </li>
                                    <li>Conditional
                                        <ul className="list-disc ml-4">
                                            <li>If</li>
                                            <li>Else</li>
                                            <li>Loop
                                                <ul className="list-disc ml-4">
                                                    <li>For</li>
                                                    <ul className="list-disc ml-4">
                                                        <li>3 Statements</li>
                                                        <li>For/in</li>
                                                        <li>For/of</li>
                                                    </ul>
                                                    <li>While
                                                        <ul className="list-disc ml-4">
                                                            <li>Do/while</li>
                                                            <li>While</li>
                                                        </ul>
                                                    </li>
                                                    <li>Function</li>
                                                    <ul className="list-disc ml-4">
                                                        <li>Declaration</li>
                                                        <li>Return</li>
                                                        <li>Throw</li>
                                                    </ul>
                                                    <li>Try/catch</li>
                                                    <ul className="list-disc ml-4">
                                                        <li>Try/Catch</li>
                                                        <li>Try/Catch/Finally</li>
                                                    </ul>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="w-[33.33%]  bg-gray-300 overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                            <div className='p-5'>
                                <p className='font-bold kinds-exp'>
                                    Expressions kinds
                                </p>
                                <ul className="list-disc ml-4">
                                    {/* Operation, Read variable and Function call */}
                                    <li><span className='kinds-exp-op'>Operation</span>
                                        <ul className="list-disc ml-4">
                                            <li><Unary /></li>
                                            <li><Binary /></li>
                                            <li><Ternary /></li>
                                        </ul>
                                    </li>
                                    <li><span className='kinds-exp-read'>Read variable</span> </li>
                                    <ul className="list-disc ml-4">
                                        <li> <FromVariable /> </li>
                                        <li>
                                            <span className='kinds-exp-read-prop'>From property</span>
                                        </li>
                                        <ul className="list-disc ml-4">
                                            <li> <FromPropByStaticName /> </li>
                                            <li> <FromPropByDynamicName /> </li>
                                        </ul>
                                    </ul>
                                    <li> <FunctionCall /> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[33.33%]  bg-gray-300 overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                            <div className='p-5'>
                                <p className='font-bold kinds-data'>
                                    Data kinds
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
                <div className="col-span-2 h-screen bg-gray-300">

                    <div className="h-[60%]  bg-gray-300  overflow-auto" style={{ scrollbarWidth: 'thin' }} >
                    </div>
                    <div className="h-[40%]  bg-gray-600">Right bottom part</div>
                </div>

            </div>
        </div>
    );
}

export { MainPage };