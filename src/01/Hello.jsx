import CurrentTime from "./CurrentTime";

function Hello(){
    let name = '';

    return (
        
        <div className="mb-20 text-6xl text-fuchsia-900" /* style={{color:"blue"}} */>
            Hello React! {`${"님님님"}` +  ((name != '') ? name : '없음 💦')}
        </div>
    )
}

export default Hello