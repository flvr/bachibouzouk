import { membersList } from '../data/membersList.js'

function Members(){

    return (
        <div id="members" className="w3-container w3-padding-32">
            <div className="w3-row w3-center">

                {membersList.map((member) => (
                    <div className="sub_altern_container" key={ member.id }> 
                        <div className="">
                            <img src={ member.photo } alt={ member.name+" : "+member.category }  className="member-img" />
                            <div><b>{ member.name }</b></div>
                            <div>{ member.category }</div>
                        </div>
                        <div className="">
                            <h2>La bio de { member.name }</h2>
                            <p style={{ whiteSpace: 'pre-line' }}>{ member.bio }</p>
                        </div>
                    </div>
                ))}
                {/*


                <div className="w3-third">
                    <div className="">
                        <img src={ member_2 } alt="Name2" className="member-img" style={{ width:'60%' }} />
                        <p>Bruno</p>
                    </div>
                    <div className="">La bio de Bruno</div>
                </div>

                <div className="w3-third">
                    <div className="">
                        <img src={ member_3 } alt="Name3" className="member-img" style={{ width:'60%' }} />
                        <p>Christophe</p>
                    </div>
                    <div className="">Christophe</div>
                </div>
                */}


            </div>
        </div>
    )
}

export default Members