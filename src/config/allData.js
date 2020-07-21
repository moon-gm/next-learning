// 必要データのインポート
import States from './states';
import Pages from './pages';

/**
 * ページ設定情報を返す
 * @param funcs array
 * @name ページの名前
 * @func ページを表示するfunction
 * @state ページのstate
 * @children 子リストがある場合の設定
 */
function AllData(funcs) {
	return (
		[
			// Topページ
			{
				"name": Pages.Top.Name,
				"path": Pages.Top.Path,
				"Component": Pages.Top.Top,
				"func": funcs[0].Top,
				"state": {
					"page": States.page.Top,
				},
			},
			// 1. 環境構築
			{
				"name": Pages.Page1.Name,
				"func": funcs[1].Page1.L1,
				"state": {
					"page": States.page.Page1.L1,
					"list": States.list.list1,
				},
				"children": [
					// 1-1. React.js
					{
						"name": Pages.Page1.Section1.Name,
						"path": Pages.Page1.Section1.Path,
						"Component": Pages.Page1.Section1.Environment,
						"func": funcs[1].Page1.S1,
						"state": {
							"page": States.page.Page1.S1,
							"list": States.list.list1,
						},
					},
					// 1-2. 手動で設定
					{
						"name": Pages.Page1.Section2.Name,
						"path": Pages.Page1.Section2.Path,
						"Component": Pages.Page1.Section2.EnvironmentM,
						"func": funcs[1].Page1.S2,
						"state": {
							"page": States.page.Page1.S2,
							"list": States.list.list1,
						},
					},
					// 1-3. Envの設定
					{
						"name": Pages.Page1.Section3.Name,
						"path": Pages.Page1.Section3.Path,
						"Component": Pages.Page1.Section3.AboutEnv,
						"func": funcs[1].Page1.S3,
						"state": {
							"page": States.page.Page1.S3,
							"list": States.list.list1,
						},
					},
				],
			},
			// 2. プロジェクト構成
			{
				"name": Pages.Page2.Name,
				"func": funcs[2].Page2.L2,
				"state": {
					"page": States.page.Page2.L2,
					"list": States.list.list2,
				},
				"children": [
					// 2-1. ディレクトリ構成
					{
						"name": Pages.Page2.Section1.Name,
						"path": Pages.Page2.Section1.Path,
						"Component": Pages.Page2.Section1.DirCheck,
						"func": funcs[2].Page2.S1,
						"state": {
							"page": States.page.Page2.S1,
							"list": States.list.list2,
						},
					},
					// 2-2. ファイル構成
					{
						"name": Pages.Page2.Section2.Name,
						"path": Pages.Page2.Section2.Path,
						"Component": Pages.Page2.Section2.FileConst,
						"func": funcs[2].Page2.S2,
						"state": {
							"page": States.page.Page2.S2,
							"list": States.list.list2,
						},
					},
				],
			},
			// 3. コンポーネント
			{
				"name": Pages.Page3.Name,
				"func": funcs[3].Page3.L3,
				"state": {
					"page": States.page.Page3.L3,
					"list": States.list.list3,
				},
				"children": [
					// 3-1. 作成方法
					{
						"name": Pages.Page3.Section1.Name,
						"path": Pages.Page3.Section1.Path,
						"Component": Pages.Page3.Section1.HowToCreateComponent,
						"func": funcs[3].Page3.S1,
						"state": {
							"page": States.page.Page3.S1,
							"list": States.list.list3,
						},
					},
					// 3-2. 役割ごとに作成
					{
						"name": Pages.Page3.Section2.Name,
						"path": Pages.Page3.Section2.Path,
						"Component": Pages.Page3.Section2.CreateRolls,
						"func": funcs[3].Page3.S2,
						"state": {
							"page": States.page.Page3.S2,
							"list": States.list.list3,
						},
					},
					// 3-3. Stateの使い方
					{
						"name": Pages.Page3.Section3.Name,
						"path": Pages.Page3.Section3.Path,
						"Component": Pages.Page3.Section3.AboutState,
						"func": funcs[3].Page3.S3,
						"state": {
							"page": States.page.Page3.S3,
							"list": States.list.list3,
						},
					},
					// 3-4. Propsの使い方
					{
						"name": Pages.Page3.Section4.Name,
						"path": Pages.Page3.Section4.Path,
						"Component": Pages.Page3.Section4.AboutProps,
						"func": funcs[3].Page3.S4,
						"state": {
							"page": States.page.Page3.S4,
							"list": States.list.list3,
						},
					},
				],
			},
			// 4. ルーティング
			{
				"name": Pages.Page4.Name,
				"func": funcs[4].Page4.L4,
				"state": {
					"page": States.page.Page4.L4,
					"list": States.list.list4,
				},
				"children": [
					// 4-1. URLを付与する場合
					{
						"name": Pages.Page4.Section1.Name,
						"path": Pages.Page4.Section1.Path,
						"Component": Pages.Page4.Section1.UseLibrary,
						"func": funcs[4].Page4.S1,
						"state": {
							"page": States.page.Page4.S1,
							"list": States.list.list4,
						},
					},
					// 4-2. SPAの場合
					{
						"name": Pages.Page4.Section2.Name,
						"path": Pages.Page4.Section2.Path,
						"Component": Pages.Page4.Section2.RoutingManual,
						"func": funcs[4].Page4.S2,
						"state": {
							"page": States.page.Page4.S2,
							"list": States.list.list4,
						},
					},
				],
			},
			// 5. ライブラリ(プラグイン)
			{
				"name": Pages.Page5.Name,
				"func": funcs[5].Page5.L5,
				"state": {
					"page": States.page.Page5.L5,
					"list": States.list.list5,
				},
				"children": [
					// 5-1. ライブラリ一覧
					{
						"name": Pages.Page5.Section1.Name,
						"path": Pages.Page5.Section1.Path,
						"Component": Pages.Page5.Section1.LibaryList,
						"func": funcs[5].Page5.S1,
						"state": {
							"page": States.page.Page5.S1,
							"list": States.list.list5,
						},
					},
					// 5-2. React Syntax Highlighter
					{
						"name": Pages.Page5.Section2.Name,
						"path": Pages.Page5.Section2.Path,
						"Component": Pages.Page5.Section2.ReactSyntaxHighlighter,
						"func": funcs[5].Page5.S2,
						"state": {
							"page": States.page.Page5.S2,
							"list": States.list.list5,
						},
					},
					// 5-3. React Select
					{
						"name": Pages.Page5.Section3.Name,
						"path": Pages.Page5.Section3.Path,
						"Component": Pages.Page5.Section3.ReactSelect,
						"func": funcs[5].Page5.S3,
						"state": {
							"page": States.page.Page5.S3,
							"list": States.list.list5,
						},
					},
					// 5-4. React Dropzone
					{
						"name": Pages.Page5.Section4.Name,
						"path": Pages.Page5.Section4.Path,
						"Component": Pages.Page5.Section4.ReactDropzone,
						"func": funcs[5].Page5.S4,
						"state": {
							"page": States.page.Page5.S4,
							"list": States.list.list5,
						},
					},
					// 5-5. React Color
					{
						"name": Pages.Page5.Section5.Name,
						"path": Pages.Page5.Section5.Path,
						"Component": Pages.Page5.Section5.ReactColor,
						"func": funcs[5].Page5.S5,
						"state": {
							"page": States.page.Page5.S5,
							"list": States.list.list5,
						},
					},
					// 5-6. React Table
					{
						"name": Pages.Page5.Section6.Name,
						"path": Pages.Page5.Section6.Path,
						"Component": Pages.Page5.Section6.ReactTable,
						"func": funcs[5].Page5.S6,
						"state": {
							"page": States.page.Page5.S6,
							"list": States.list.list5,
						},
					},
					// 5-7. React Draggable
					{
						"name": Pages.Page5.Section7.Name,
						"path": Pages.Page5.Section7.Path,
						"Component": Pages.Page5.Section7.ReactDraggable,
						"func": funcs[5].Page5.S7,
						"state": {
							"page": States.page.Page5.S7,
							"list": States.list.list5,
						},
					},
					// 5-8. React Swipeable Views
					{
						"name": Pages.Page5.Section8.Name,
						"path": Pages.Page5.Section8.Path,
						"Component": Pages.Page5.Section8.ReactSwipeableViews,
						"func": funcs[5].Page5.S8,
						"state": {
							"page": States.page.Page5.S8,
							"list": States.list.list5,
						},
					},
					// 5-9. React Modal
					{
						"name": Pages.Page5.Section9.Name,
						"path": Pages.Page5.Section9.Path,
						"Component": Pages.Page5.Section9.ReactModal,
						"func": funcs[5].Page5.S9,
						"state": {
							"page": States.page.Page5.S9,
							"list": States.list.list5,
						},
					},
					// 5-10. React Datepicker
					{
						"name": Pages.Page5.Section10.Name,
						"path": Pages.Page5.Section10.Path,
						"Component": Pages.Page5.Section10.ReactDatepicker,
						"func": funcs[5].Page5.S10,
						"state": {
							"page": States.page.Page5.S10,
							"list": States.list.list5,
						},
					},
					// 5-11. Styled Components
					{
						"name": Pages.Page5.Section11.Name,
						"path": Pages.Page5.Section11.Path,
						"Component": Pages.Page5.Section11.StyledComponents,
						"func": funcs[5].Page5.S11,
						"state": {
							"page": States.page.Page5.S11,
							"list": States.list.list5,
						},
					},
					// 5-12. React Redux
					{
						"name": Pages.Page5.Section12.Name,
						"path": Pages.Page5.Section12.Path,
						"Component": Pages.Page5.Section12.ReactRedux,
						"func": funcs[5].Page5.S12,
						"state": {
							"page": States.page.Page5.S12,
							"list": States.list.list5,
						},
					},
					// 5-13. Prop Types
					{
						"name": Pages.Page5.Section13.Name,
						"path": Pages.Page5.Section13.Path,
						"Component": Pages.Page5.Section13.PropTypes,
						"func": funcs[5].Page5.S13,
						"state": {
							"page": States.page.Page5.S13,
							"list": States.list.list5,
						},
					},
					// 5-14. React RouterDOM
					{
						"name": Pages.Page5.Section14.Name,
						"path": Pages.Page5.Section14.Path,
						"Component": Pages.Page5.Section14.ReactRouterDOM,
						"func": funcs[5].Page5.S14,
						"state": {
							"page": States.page.Page5.S14,
							"list": States.list.list5,
						},
					},
					// 5-15. React Helmet
					{
						"name": Pages.Page5.Section15.Name,
						"path": Pages.Page5.Section15.Path,
						"Component": Pages.Page5.Section15.ReactHelmet,
						"func": funcs[5].Page5.S15,
						"state": {
							"page": States.page.Page5.S15,
							"list": States.list.list5,
						},
					},
					// 5-16. Classnames
					{
						"name": Pages.Page5.Section16.Name,
						"path": Pages.Page5.Section16.Path,
						"Component": Pages.Page5.Section16.Classnames,
						"func": funcs[5].Page5.S16,
						"state": {
							"page": States.page.Page5.S16,
							"list": States.list.list5,
						},
					},
					// 5-17. React Onclickoutside
					{
						"name": Pages.Page5.Section17.Name,
						"path": Pages.Page5.Section17.Path,
						"Component": Pages.Page5.Section17.ReactOnclickoutside,
						"func": funcs[5].Page5.S17,
						"state": {
							"page": States.page.Page5.S17,
							"list": States.list.list5,
						},
					},
					// 5-18. React Markdown
					{
						"name": Pages.Page5.Section18.Name,
						"path": Pages.Page5.Section18.Path,
						"Component": Pages.Page5.Section18.ReactMarkdown,
						"func": funcs[5].Page5.S18,
						"state": {
							"page": States.page.Page5.S18,
							"list": States.list.list5,
						},
					},
					// 5-19. React Scripts
					{
						"name": Pages.Page5.Section19.Name,
						"path": Pages.Page5.Section19.Path,
						"Component": Pages.Page5.Section19.ReactScripts,
						"func": funcs[5].Page5.S19,
						"state": {
							"page": States.page.Page5.S19,
							"list": States.list.list5,
						},
					},
					// 5-20. React Hot Loader
					{
						"name": Pages.Page5.Section20.Name,
						"path": Pages.Page5.Section20.Path,
						"Component": Pages.Page5.Section20.ReactHotLoader,
						"func": funcs[5].Page5.S20,
						"state": {
							"page": States.page.Page5.S20,
							"list": States.list.list5,
						},
					},
				],
			},
			// 6. フック(Hooks)
			{
				"name": Pages.Page6.Name,
				"func": funcs[6].Page6.L6,
				"state": {
					"page": States.page.Page6.L6,
					"list": States.list.list6,
				},
				"children": [
					// 6-1. フックとは
					{
						"name": Pages.Page6.Section1.Name,
						"path": Pages.Page6.Section1.Path,
						"Component": Pages.Page6.Section1.AboutHook,
						"func": funcs[6].Page6.S1,
						"state": {
							"page": States.page.Page6.S1,
							"list": States.list.list6,
						},
					},
					// 6-2. フックの使い方
					{
						"name": Pages.Page6.Section2.Name,
						"path": Pages.Page6.Section2.Path,
						"Component": Pages.Page6.Section2.HowToUseHook,
						"func": funcs[6].Page6.S2,
						"state": {
							"page": States.page.Page6.S2,
							"list": States.list.list6,
						},
					},
					// 6-3. カスタムフック
					{
						"name": Pages.Page6.Section3.Name,
						"path": Pages.Page6.Section3.Path,
						"Component": Pages.Page6.Section3.CustomHook,
						"func": funcs[6].Page6.S3,
						"state": {
							"page": States.page.Page6.S3,
							"list": States.list.list6,
						},
					},
					// 6-4. フックAPI
					{
						"name": Pages.Page6.Section4.Name,
						"path": Pages.Page6.Section4.Path,
						"Component": Pages.Page6.Section4.HookAPI,
						"func": funcs[6].Page6.S4,
						"state": {
							"page": States.page.Page6.S4,
							"list": States.list.list6,
						},
					},
				],
			},
			// 7. ---追加予定---
			{
				"name": Pages.Page7.Name,
				"func": funcs[7].Page7.L7,
				"state": {
					"page": States.page.Page7.L7,
					"list": States.list.list7,
				},
				"children": [
					// 7-1. ---追加予定---
					{
						"name": Pages.Page7.Section1.Name,
						"path": Pages.Page7.Section1.Path,
						"Component": Pages.Page7.Section1.Maintenance,
						"func": funcs[7].Page7.S1,
						"state": {
							"page": States.page.Page7.S1,
							"list": States.list.list7,
						},
					},
					// 7-2. ---追加予定---
					{
						"name": Pages.Page7.Section2.Name,
						"path": Pages.Page7.Section2.Path,
						"Component": Pages.Page7.Section2.Maintenance,
						"func": funcs[7].Page7.S2,
						"state": {
							"page": States.page.Page7.S2,
							"list": States.list.list7,
						},
					},
				],
			},
			// 8. ---追加予定---
			{
				"name": Pages.Page8.Name,
				"func": funcs[8].Page8.L8,
				"state": {
					"page": States.page.Page8.L8,
					"list": States.list.list8,
				},
				"children": [
					// 8-1. ---追加予定---
					{
						"name": Pages.Page8.Section1.Name,
						"path": Pages.Page8.Section1.Path,
						"Component": Pages.Page8.Section1.Maintenance,
						"func": funcs[8].Page8.S1,
						"state": {
							"page": States.page.Page8.S1,
							"list": States.list.list8,
						},
					},
					// 8-2. ---追加予定---
					{
						"name": Pages.Page8.Section2.Name,
						"path": Pages.Page8.Section2.Path,
						"Component": Pages.Page8.Section2.Maintenance,
						"func": funcs[8].Page8.S2,
						"state": {
							"page": States.page.Page8.S2,
							"list": States.list.list8,
						},
					},
				],
			},
			// 9. ---追加予定---
			{
				"name": Pages.Page9.Name,
				"func": funcs[9].Page9.L9,
				"state": {
					"page": States.page.Page9.L9,
					"list": States.list.list9,
				},
				"children": [
					// 9-1. ---追加予定---
					{
						"name": Pages.Page9.Section1.Name,
						"path": Pages.Page9.Section1.Path,
						"Component": Pages.Page9.Section1.Maintenance,
						"func": funcs[9].Page9.S1,
						"state": {
							"page": States.page.Page9.S1,
							"list": States.list.list9,
						},
					},
					// 9-2. ---追加予定---
					{
						"name": Pages.Page9.Section2.Name,
						"path": Pages.Page9.Section2.Path,
						"Component": Pages.Page9.Section2.Maintenance,
						"func": funcs[9].Page9.S2,
						"state": {
							"page": States.page.Page9.S2,
							"list": States.list.list9,
						},
					},
				],
			},
			// 10. ---追加予定---
			{
				"name": Pages.Page10.Name,
				"func": funcs[10].Page10.L10,
				"state": {
					"page": States.page.Page10.L10,
					"list": States.list.list10,
				},
				"children": [
					// 10-1. ---追加予定---
					{
						"name": Pages.Page10.Section1.Name,
						"path": Pages.Page10.Section1.Path,
						"Component": Pages.Page10.Section1.Maintenance,
						"func": funcs[10].Page10.S1,
						"state": {
							"page": States.page.Page10.S1,
							"list": States.list.list10,
						},
					},
					// 10-2. ---追加予定---
					{
						"name": Pages.Page10.Section2.Name,
						"path": Pages.Page10.Section2.Path,
						"Component": Pages.Page10.Section2.Maintenance,
						"func": funcs[10].Page10.S2,
						"state": {
							"page": States.page.Page10.S2,
							"list": States.list.list10,
						},
					},
				],
			},
		]
	);
}
export default AllData;
