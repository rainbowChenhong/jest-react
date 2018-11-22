import { shallow, mount, render } from 'enzyme';

import React from 'react';
import Index from './Index';



describe('Index component', () => {

  //挂载组件
  const wrapperComponent = mount(<Index/>);
  let value ="bar";

  //Index 是否正常渲染
  test("check Index component is render ",()=>{
    expect(wrapperComponent.find(Index)).toBeTruthy();
  });
  //input 是否正常渲染
  test("check input is render ",()=>{
    expect(wrapperComponent.exists('input[type="text"]')).toEqual(false);
  });

  //input 的change事件
  test("check input change event is triggered",()=>{
    //触发change事件
    wrapperComponent.find('input[type="text"]').simulate('change', {target: {value}});
    //input的value是否正常渲染
    expect(wrapperComponent.find('input[type="text"]').props().value).toBe("bar");

  });
  //新增按钮事件
  test("check add button event is triggered",()=>{
    //触发点击事件
    wrapperComponent.find('button').simulate('click');
    //input的value是否清空
    expect(wrapperComponent.find('input[type="text"]').props().value).toBe("");
  });

});