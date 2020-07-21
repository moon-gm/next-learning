/** Page Componentインポート **/
// Topページ
import Top from '../view/pages/top';
// Page1
import Environment from '../view/pages/page1/s1Environment';
import EnvironmentM from '../view/pages/page1/s2EnvironmentManual';
import AboutEnv from '../view/pages/page1/s3AboutEnv';
// Page2
import DirCheck from '../view/pages/page2/s1DirConst';
import FileConst from '../view/pages/page2/s2FileConst';
// Page3
import HowToCreateComponent from '../view/pages/page3/s1HowToCreateComponent';
import CreateRolls from '../view/pages/page3/s2CreateRolls';
import AboutState from '../view/pages/page3/s3AboutState';
import AboutProps from '../view/pages/page3/s4AboutProps';
// Page4
import RoutingManual from '../view/pages/page4/s2RoutingManual';
import UseLibrary from '../view/pages/page4/s1UseLibrary';
// Page5
import LibaryList from '../view/pages/page5/s1LibaryList';
import ReactSyntaxHighlighter from '../view/pages/page5/s2ReactSyntaxHighlighter';
import ReactSelect from '../view/pages/page5/s3ReactSelect';
import ReactDropzone from '../view/pages/page5/s4ReactDropzone';
import ReactColor from '../view/pages/page5/s5ReactColor';
import ReactTable from '../view/pages/page5/s6ReactTable';
import ReactDraggable from '../view/pages/page5/s7ReactDraggable';
import ReactSwipeableViews from '../view/pages/page5/s8ReactSwipeableViews';
import ReactModal from '../view/pages/page5/s9ReactModal';
import ReactDatepicker from '../view/pages/page5/s10ReactDatepicker';
import StyledComponents from '../view/pages/page5/s11StyledComponents';
import ReactRedux from '../view/pages/page5/s12ReactRedux';
import PropTypes from '../view/pages/page5/s13PropTypes';
import ReactRouterDOM from '../view/pages/page5/s14ReactRouterDOM';
import ReactHelmet from '../view/pages/page5/s15ReactHelmet';
import Classnames from '../view/pages/page5/s16Classnames';
import ReactOnclickoutside from '../view/pages/page5/s17ReactOnclickoutside';
import ReactMarkdown from '../view/pages/page5/s18ReactMarkdown';
import ReactScripts from '../view/pages/page5/s19ReactScripts';
import ReactHotLoader from '../view/pages/page5/s20ReactHotLoader';
// Page6
import AboutHook from '../view/pages/page6/s1AboutHook';
import HowToUseHook from '../view/pages/page6/s2HowToUseHook';
import CustomHook from '../view/pages/page6/s3CustomHook';
import HookAPI from '../view/pages/page6/s4HookAPI';
// Maintenance page
import Maintenance from '../view/pages/maintenance';

/** Page Component設定 **/
export default {
	// Topページ
	Top: {
		Name: "React Learning",
		Path: "/",
		Top: Top,
	},
	// 1. 環境構築ページ
	Page1: {
		Name: "1. 環境構築",
		Section1: {
			Name: "1-1. React.js",
			Path: "/page1/s1Environment",
			Environment: Environment,
		},
		Section2: {
			Name: "1-2. 手動で設定",
			Path: "/page1/s2EnvironmentManual",
			EnvironmentM: EnvironmentM,
		},
		Section3: {
			Name: "1-3. Envの設定",
			Path: "/page1/s3AbountEnv",
			AboutEnv: AboutEnv,
		},
	},
	// 2. プロジェクト構成
	Page2: {
		Name: "2. プロジェクト構成",
		Section1: {
			Name: "2-1. ディレクトリ構成",
			Path: "/page2/s1DirConst",
			DirCheck: DirCheck,
		},
		Section2: {
			Name: "2-2. ファイル構成",
			Path: "/page2/s2FileConst",
			FileConst: FileConst,
		},
	},
	// 3. コンポーネント
	Page3: {
		Name: "3. コンポーネント",
		Section1: {
			Name: "3-1. 作成方法",
			Path: "/page3/s1HowToCreateComponent",
			HowToCreateComponent: HowToCreateComponent,
		},
		Section2: {
			Name: "3-2. 役割ごとに作成",
			Path: "/page3/s2CreateRolls",
			CreateRolls: CreateRolls,
		},
		Section3: {
			Name: "3-3. Stateの使い方",
			Path: "/page3/s3AboutState",
			AboutState: AboutState,
		},
		Section4: {
			Name: "3-4. Propsの使い方",
			Path: "/page3/s4AboutProps",
			AboutProps: AboutProps,
		},
	},
	// 4. ルーティング
	Page4: {
		Name: "4. ルーティング",
		Section1: {
			Name: "4-1. URLを付与する場合",
			Path: "/page4/s1UseLibrary",
			UseLibrary: UseLibrary,
		},
		Section2: {
			Name: "4-2. SPAの場合",
			Path: "/page4/s2RoutingManual",
			RoutingManual: RoutingManual,
		},
	},
	// 5. ライブラリ(プラグイン)
	Page5: {
		Name: "5. ライブラリ(プラグイン)",
		Section1: {
			Name: "5-1. ライブラリ一覧",
			Path: "/page5/s1LibraryList",
			LibaryList: LibaryList,
		},
		Section2: {
			Name: "5-2. React Syntax Highlighter",
			Path: "/page5/s2ReactSyntaxHighlighter",
			ReactSyntaxHighlighter: ReactSyntaxHighlighter,
		},
		Section3: {
			Name: "5-3. React Select",
			Path: "/page5/s3ReactSelect",
			ReactSelect: ReactSelect,
		},
		Section4: {
			Name: "5-4. React Dropzone",
			Path: "/page5/s4ReactDropzone",
			ReactDropzone: ReactDropzone,
		},
		Section5: {
			Name: "5-5. React Color",
			Path: "/page5/s5ReactColor",
			ReactColor: ReactColor,
		},
		Section6: {
			Name: "5-6. React Table",
			Path: "/page5/s6ReactTable",
			ReactTable: ReactTable,
		},
		Section7: {
			Name: "5-7. React Draggable",
			Path: "/page5/s7ReactDraggable",
			ReactDraggable: ReactDraggable,
		},
		Section8: {
			Name: "5-8. React Swipeable Views",
			Path: "/page5/s8ReactSwipeableViews",
			ReactSwipeableViews: ReactSwipeableViews,
		},
		Section9: {
			Name: "5-9. React Modal",
			Path: "/page5/s9ReactModal",
			ReactModal: ReactModal,
		},
		Section10: {
			Name: "5-10. React Datepicker",
			Path: "/page5/s10ReactDatepicker",
			ReactDatepicker: ReactDatepicker,
		},
		Section11: {
			Name: "5-11. Styled Components",
			Path: "/page5/s11StyledComponents",
			StyledComponents: StyledComponents,
		},
		Section12: {
			Name: "5-12. React Redux",
			Path: "/page5/s12ReactRedux",
			ReactRedux: ReactRedux,
		},
		Section13: {
			Name: "5-13. Prop Types",
			Path: "/page5/s13PropTypes",
			PropTypes: PropTypes,
		},
		Section14: {
			Name: "5-14. React RouterDOM",
			Path: "/page5/s14ReactRouterDOM",
			ReactRouterDOM: ReactRouterDOM,
		},
		Section15: {
			Name: "5-15. React Helmet",
			Path: "/page5/s15ReactHelmet",
			ReactHelmet: ReactHelmet,
		},
		Section16: {
			Name: "5-16. Classnames",
			Path: "/page5/s16Classnames",
			Classnames: Classnames,
		},
		Section17: {
			Name: "5-17. React Onclickoutside",
			Path: "/page5/s17ReactOnclickoutside",
			ReactOnclickoutside: ReactOnclickoutside,
		},
		Section18: {
			Name: "5-18. React Markdown",
			Path: "/page5/s18ReactMarkdown",
			ReactMarkdown: ReactMarkdown,
		},
		Section19: {
			Name: "5-19. React Scripts",
			Path: "/page5/s19ReactScripts",
			ReactScripts: ReactScripts,
		},
		Section20: {
			Name: "5-20. React Hot Loader",
			Path: "/page5/s20ReactHotLoader",
			ReactHotLoader: ReactHotLoader,
		},
	},
	// 6. フック(Hooks)
	Page6: {
		Name: "6. フック(Hooks)",
		Section1: {
			Name: "6-1. フックとは",
			Path: "/page6/s1AboutHook",
			AboutHook: AboutHook,
		},
		Section2: {
			Name: "6-2. フックの使い方",
			Path: "/page6/s2HowToUseHook",
			HowToUseHook: HowToUseHook,
		},
		Section3: {
			Name: "6-3. カスタムフック",
			Path: "/page6/s3CustomHook",
			CustomHook: CustomHook,
		},
		Section4: {
			Name: "6-4. フックAPI",
			Path: "/page6/s4HookAPI",
			HookAPI: HookAPI,
		},
	},
	// 7. ---追加予定---
	Page7: {
		Name: "7. ---追加予定---",
		Section1: {
			Name: "7-1. ---追加予定---",
			Path: "/page7/s1",
			Maintenance: Maintenance,
		},
		Section2: {
			Name: "7-2. ---追加予定---",
			Path: "/page7/s2",
			Maintenance: Maintenance,
		},
	},
	// 8. ---追加予定---
	Page8: {
		Name: "8. ---追加予定---",
		Section1: {
			Name: "8-1. ---追加予定---",
			Path: "/page8/s1",
			Maintenance: Maintenance,
		},
		Section2: {
			Name: "8-2. ---追加予定---",
			Path: "/page8/s2",
			Maintenance: Maintenance,
		},
	},
	// 9. ---追加予定---
	Page9: {
		Name: "9. ---追加予定---",
		Section1: {
			Name: "9-1. ---追加予定---",
			Path: "/page9/s1",
			Maintenance: Maintenance,
		},
		Section2: {
			Name: "9-2. ---追加予定---",
			Path: "/page9/s2",
			Maintenance: Maintenance,
		},
	},
	// 10. ---追加予定---
	Page10: {
		Name: "10. ---追加予定---",
		Section1: {
			Name: "10-1. ---追加予定---",
			Path: "/page10/s1",
			Maintenance: Maintenance,
		},
		Section2: {
			Name: "10-2. ---追加予定---",
			Path: "/page10/s2",
			Maintenance: Maintenance,
		},
	},
};
