export default function InputField({ icon, label }){
    return (<div id="input-field">
        <label>{label}</label>
        <img id="input-icon" src={icon}/>
        <input placeholder="0"/>
    </div>)
}