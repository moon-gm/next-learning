// サイドメニューの子リストの表示処理
import React from 'react';

const LittleList = ({listNeeds}) => {
	// 子リスト
	return(
		<li
			className={`${listNeeds.sideList} ${listNeeds.sideListChildren}`}
			onClick={listNeeds.func}
			id={listNeeds.state.page}
		>
			<span className={listNeeds.sideListText}>
				{listNeeds.name}
			</span>
		</li>
	);
}

export default LittleList;
