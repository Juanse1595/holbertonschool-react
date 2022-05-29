import { shallow } from 'enzyme';
import { Header } from '../Header/Header.js'

describe('<Header/>', ()=> {
    it('renders Header component without crashing', ()=> {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Header renders img', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img').length).toBe(1);
    });

    it('Header renders h1', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1').length).toBe(1);
    });
});