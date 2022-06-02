//svg
import UserSvg from '../svg/user'

export default function UserButton () {
    return(
        
        <>
            <div className="userContainer">
                <div className="circle">
                    <UserSvg/>
                </div>
            </div>
            <style jsx>{`
                
                .userContainer{

                    display:flex;
                    justify-content:center;
                    align-items: center;

                }

                .circle{

                    width : 40%;
                    padding : 10%;
                    border-radius: 50px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background: linear-gradient(90deg, rgba(0,245,245,1) 0%, rgba(2,195,195,1) 110%);

                }
                
                `}</style>
        </>

    )
}