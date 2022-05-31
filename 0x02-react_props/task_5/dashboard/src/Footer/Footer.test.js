import { Footer } from '../Footer/Footer.js'

describe('<Footer/>', ()=> {
    it('renders Footer component without crashing', ()=> {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Footer component renders the text specified', ()=> {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Copyright');
    });
});