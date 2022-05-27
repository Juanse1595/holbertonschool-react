import { shallow } from 'enzyme';
import App from './App';

describe('<App/>', ()=> {
    it('renders without crashing', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Checks for Notification component', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains('<Notifications />')).toBe(true);
    });

    it('Checks for Header component', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains('<Header />')).toBe(true);
    });

    it('Checks for Login component', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains('<Login />')).toBe(true);
    });

    it('Checks for Footer component', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains('<Footer />')).toBe(true);
    });
});
