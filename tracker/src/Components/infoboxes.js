import React from 'react'
import {Card , CardContent, Typography} from '@material-ui/core'
function Infoboxes({title , cases , total}) {
  return (
    <><Card>
    <CardContent>
        <Typography color='textSecondary'>
            {title}
        </Typography>
        <h2>{cases}</h2>
        <Typography>Total : {total} </Typography>
    </CardContent>
    </Card>

    
    </>
    
    
  )
}

export default Infoboxes