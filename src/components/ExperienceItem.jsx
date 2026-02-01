export const ExperienceItem = ({role, locationDate, infoList}) => {
    return (
        <>
        <span style={{ paddingBottom: '10px', display: 'block' }}>
            <strong style= {{fontSize: 'calc(11px + 2vw)'}}>
            {role}
            </strong>
        </span>
        <span style={{ paddingBottom: '5px', display: 'block' }}>
        {locationDate}
        </span>
        <ul style={{paddingBottom: '40px'}}>
            {infoList.map(infoItem => (
                <li>
                    {infoItem}
                </li>
            ))}
        
        </ul>
        </>
        
    )
};
