import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';

describe('<Notifications/>', ()=> {
    it('Test that NotificationItem renders', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    })

    it('li is rendered correctly with type prop', () => {
        const wrapper = shallow(<NotificationItem type='urgent' />);
        expect(wrapper.html()).toContain('urgent');
    })

    it('li render correcty with value prop', () => {
        const wrapper = shallow(<NotificationItem value='Hello World' />);
        expect(wrapper.find('li').text()).toBe('Hello World');
    })

    it('li renders correctly with html prop', () => {
        const wrapper = shallow(<NotificationItem html={{__html: 'dangerouslySetInnerHtml'}} />);
        expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
    })

})