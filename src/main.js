import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'amfe-flexible'
import VueClipboard from 'vue-clipboard2'
import {
  Dialog,
  Row,
  Col,
  Button,
  Icon,
  Cell,
  CellGroup,
  NavBar,
  AddressEdit,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Sidebar,
  SidebarItem,
  List,
  ContactCard,
  ContactList,
  ContactEdit,
  Popup,
  AddressList,
  Field,
  Tab,
  Tabs,
  Card,
  Swipe,
  SwipeItem,
  Lazyload,
  Divider,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Picker,
  DatetimePicker,
  Area,
  Tag,
  SubmitBar,
  PullRefresh,
  RadioGroup,
  Radio,
  DropdownMenu,
  DropdownItem,
  Panel,
  Uploader,
  Step,
  Steps,
  Search,
  ActionSheet,
  Checkbox,
  Image,
  Sku,
  NoticeBar,
  CheckboxGroup
} from 'vant'
import {quiMobile, http, encryption} from 'qui-mobile'

Vue.use(VueClipboard)
Vue.use(Dialog)
    .use(Row)
    .use(Col)
    .use(Button)
    .use(Icon)
    .use(Cell)
    .use(CellGroup)
    .use(NavBar)
    .use(AddressEdit)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Grid)
    .use(GridItem)
    .use(Sidebar)
    .use(SidebarItem)
    .use(List)
    .use(ContactCard)
    .use(ContactList)
    .use(ContactEdit)
    .use(Popup)
    .use(AddressList)
    .use(Field)
    .use(Tab)
    .use(Tabs)
    .use(Card)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Divider)
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)
    .use(Picker)
    .use(DatetimePicker)
    .use(Area)
    .use(Tag)
    .use(SubmitBar)
    .use(PullRefresh)
    .use(RadioGroup)
    .use(Radio)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Panel)
    .use(Uploader)
    .use(Step)
    .use(Steps)
    .use(Search)
    .use(ActionSheet)
    .use(Checkbox)
    .use(Image)
    .use(Sku)
    .use(NoticeBar)
    .use(CheckboxGroup)
Vue.use(quiMobile)
    .use(http)
    .use(encryption)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
