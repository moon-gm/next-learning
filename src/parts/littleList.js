// サイドメニューの子リストの表示処理
import React from 'react';
import Link from 'next/link';

const LittleList = ({listNeeds}) => {
	// 子リスト
	return(
		<li
			className={`${listNeeds.sideList} ${listNeeds.sideListChildren}`}
			onClick={listNeeds.func}
			id={listNeeds.state.page}
		>
			<Link
				href={listNeeds.link}
			>
				<span className={listNeeds.sideListText}>
					{listNeeds.name}
				</span>
			</Link>
		</li>
	);
}

export default LittleList;
