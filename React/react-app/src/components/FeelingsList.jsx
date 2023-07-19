import './FeelingsList.css'

function FeelingsList(props) {
    const { feelings } = props;

    const f_List = feelings.map((el, index) => {
        return <li key ={index}>{el}</li>
    })


    return (
        <ul>
            {f_List}
        </ul>
    )
}

export default FeelingsList;