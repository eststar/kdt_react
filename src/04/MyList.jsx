import MyListItem from './MyListItem'
import MyListData from './MyListData.json'

export default function MyList() {
    const datas = MyListData.map((item)=>
        <MyListItem 
            key = {item.title}
            titleData={item.title} 
            imgUrlData={item.imgUrl} 
            contextData={item.content} />
    );
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {/* <MyListItem itemNum="0" />
            <MyListItem itemNum="1" />
            <MyListItem itemNum="2" />
            <MyListItem itemNum="3" />    */}
            {/* <MyListItem titleData={title} imgUrlData={imgUrl} contextData={contexts}/>
            <MyListItem titleData={title} imgUrlData={imgUrl} contextData={contexts} />
            <MyListItem titleData={title} imgUrlData={imgUrl} contextData={contexts} />
            <MyListItem titleData={title} imgUrlData={imgUrl} contextData={contexts} />           */}
            {datas}
        </div>
    )
}
