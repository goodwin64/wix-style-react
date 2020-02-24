import React from 'react';
import { floatingHelperContentDriverFactory } from './FloatingHelperContent.private.driver';
import FloatingHelperContent from '../FloatingHelperContent';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { mount } from 'enzyme';

const defaults = require('lodash/defaults');

const noop = () => null;

describe('FloatingHelperContent', () => {
  const createDriver = createDriverFactory(floatingHelperContentDriverFactory);

  const FloatingHelperContentBuilder = withDefaultsHOC({
    component: FloatingHelperContent,
    defaultProps: { body: 'this is the body' },
  });

  describe('title prop', () => {
    it('should not have title by default', () => {
      const driver = createDriver(<FloatingHelperContentBuilder />);
      expect(driver.hasTitle()).toBe(false);
    });

    it('should have title with proper content', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder title="title" />,
      );
      expect(driver.hasTitle()).toBe(true);
      expect(driver.getTitleContent()).toBe('title');
    });
  });

  describe('body prop', () => {
    it('should have body with simple text content', () => {
      const driver = createDriver(<FloatingHelperContentBuilder body="body" />);
      expect(driver.hasBody()).toBe(true);
      expect(driver.getBodyContent()).toBe('body');
    });
  });

  describe('action button', () => {
    it('should not have action button by default', () => {
      const driver = createDriver(<FloatingHelperContentBuilder />);
      expect(driver.hasActionButton()).toBe(false);
    });

    it('should not have action button if only actionText is passed', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder actionText="Click Me!" />,
      );
      expect(driver.hasActionButton()).toBe(false);
    });

    it('should not have action button if only onActionClick is passed', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder onActionClick={noop} />,
      );
      expect(driver.hasActionButton()).toBe(false);
    });

    it('should not have action button if actionText is an empty string', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder onActionClick={noop} actionText="" />,
      );
      expect(driver.hasActionButton()).toBe(false);
    });

    it('should have action button with correct text', () => {
      const actionText = 'Click Me!';
      const driver = createDriver(
        <FloatingHelperContentBuilder
          actionText={actionText}
          onActionClick={noop}
        />,
      );
      expect(driver.hasActionButton()).toBe(true);
      expect(driver.getActionButtonText()).toBe(actionText);
    });

    it('should call onClick when action button clicked', () => {
      const spy = jest.fn();
      const driver = createDriver(
        <FloatingHelperContentBuilder
          actionText="Click me!"
          onActionClick={spy}
        />,
      );
      driver.clickActionButton();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('footer prop', () => {
    it('should not be visible by default', () => {
      const driver = createDriver(<FloatingHelperContentBuilder />);
      expect(driver.hasFooter()).toBeFalsy();
    });

    it('should display footer contents', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder footer={<div>footer</div>} />,
      );
      expect(driver.hasFooter()).toBe(true);
      expect(driver.getFooter()).toEqual(mount(<div>footer</div>).getDOMNode());
    });
  });

  describe('image prop', () => {
    it('should not be visible by default', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder actionText="Click me!" />,
      );
      expect(driver.hasImage()).toBeFalsy();
    });

    it('should render the image', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder image={<div>🤔</div>} />,
      );
      expect(driver.hasImage()).toBe(true);
      expect(driver.getImage()).toEqual(mount(<div>🤔</div>).getDOMNode());
    });
  });
});

/**
 * Create a Component with applied default props.
 * The new component can receive Partial<P> instead of P.
 */
function withDefaultsHOC({ component, defaultProps }) {
  return partialProps => {
    return React.createElement(
      component,
      defaults({}, partialProps, defaultProps),
    );
  };
}
