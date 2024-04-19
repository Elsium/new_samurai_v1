import React from "react";
import {create} from 'react-test-renderer';
import StatusHooks from "./StatusHooks";

describe('StatusHook component', () => {
    test('after creation span should be displayed', () => {
        const component = create(<StatusHooks status={'test status'}/>);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType('span');
        expect(span.length).not.toBeNull();
    })
    test('after creation input shouldn`t be displayed', () => {
        const component = create(<StatusHooks status={'test status'}/>);
        const root = component.root;
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            let input = root.findByType('input');
        }).toThrow();
    })
})