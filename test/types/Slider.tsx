import * as React from 'react';
import Slider from '../../src/Slider';
import { sliderTestkitFactory } from '../../dist/testkit';
import { sliderTestkitFactory as sliderEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { sliderTestkitFactory as sliderPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function SliderWithMandatoryProps() {
  return <Slider onChange={() => {}} />;
}

function SliderWithAllProps() {
  return (
    <Slider
      onChange={(_value) => {}}
      allowCross
      dataHook="x"
      disabled
      displayMarks
      displayTooltip
      id=""
      max={2}
      min={1}
      onAfterChange={() => {}}
      pushable
      rtl
      step={1}
      value={1}
      marks={{ 1 : 1 , 2: '2'}}
    />
  );
}

async function testkits() {
  const testkit = sliderTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = sliderEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await sliderPuppeteerTestkitFactory({
    dataHook: 'hook',
    page
  });
}
