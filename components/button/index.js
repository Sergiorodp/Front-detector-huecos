export default function Button( { disable , children, onClick, hover = 'black' ,color = "black" } ){
    return(
        <>
            <button onClick={onClick} disabled = {disable}>
                {children}
            </button>

        <style jsx>{`
            button {
            align-items: center;
            background: ${color};
            border-radius: 5px;
            border: 0;
            color: #fff;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-weight: 600;
            padding: 8px 24px;
            margin: 0px 2px;
            width : 100%;
            justify-content:center;
            transition: opacity .3s ease;
            }
            button:hover {
            background:${hover};
            }

            button[disabled]{
                opacity: .7;
            }
      `}</style>

        </>
    )
}