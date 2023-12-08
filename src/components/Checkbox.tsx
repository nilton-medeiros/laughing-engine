interface CheckboxProps {
    id:string;
    texto: string;
    selecionado: boolean;
    lidaComMudanca: () => void;
}

export default function (props: CheckboxProps) {
    const id = `checkbox-${props.id}`
    return (
        <div className="flex text-xl gap-2">
            <input type="checkbox" checked={props.selecionado}
            onChange={props.lidaComMudanca} id={id}/>
            <label htmlFor={id}>{props.texto}</label>
        </div>
    );
}