
export default function ChartCard({children, width = '96%', height='96%'}){
    return(
        <>
        <div className="card-container">
            {children}
        </div>
        <style jsx>{`
            
            .card-container{
                width: ${width};
                height: ${height};
                overflow: hidden;
                background: white;
                border-radius: 20px;
                margin: 0 2% 2% 2%;
                padding: 2%;
                box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.05);
            }
            
            
            `}</style>
        </>
    )
}