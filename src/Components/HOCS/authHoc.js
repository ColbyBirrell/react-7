import React, {useState, useEffect} from 'react'

export default WrappedComponent => {
    return props => {
        const [isAdmin, setIsAdmin] = useState(false)

        useEffect(() => {
            if (props.isAdmin){
                setIsAdmin(true)
            }else {
                setIsAdmin(false)
            }
        }, [props.isAdmin])

        return isAdmin ? <WrappedComponent {...props} /> : <div>You need to login</div>
    }
}