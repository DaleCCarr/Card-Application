import React from 'react';
import Card from '../../_card/component/Card.js'

export default class CardContainer extends React.Component{
    constructor(props){
        super(props);
    }
 
    render(){
        const testCardInfo = {
                title: "Dale Carr",
                description: "Quarter bilge rat reef Spanish Main parrel square-rigged heave to code of conduct case shot gaff. Jib matey deadlights wench square-rigged doubloon cackle fruit trysail gun lugger." +
                  "Skysail driver hands mizzenmast code of conduct jolly boat case shot scurvy tack plunder. Sink me Letter of Marque bilge water fore case shot interloper pressgang hempen halter long boat grog blossom."
                ,
                profile_picture: "https://i.imgur.com/2oHZ1NT.png",
                colour: "purple"
        }
        const testCardInfo2 = {
            title: "John James Smith",
            description: "Quarter bilge rat reef Spanish Main parrel square-rigged heave to code of conduct case shot gaff. Jib matey deadlights wench square-rigged doubloon cackle fruit trysail gun lugger."
            ,
            profile_picture: "https://i.imgur.com/2oHZ1NT.png",
            colour: "aquamarine"
    }
        return <div>
            <Card cardInfo = {testCardInfo}/>
            <Card cardInfo = {testCardInfo2}/>
            <Card cardInfo  =""/>
        </div>
    }

}