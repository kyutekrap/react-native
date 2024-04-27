import { useSelector } from "react-redux"

export const getUsername = () => {
    return useSelector((state: any) => state.username)
}
