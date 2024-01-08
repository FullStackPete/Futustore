type iconProps = {
    name:string,
    className:string,
}

function Icon({name,className}:iconProps) {        

  return <span className={`material-symbols-outlined ` + className}>{name}</span>;
}

export default Icon;
