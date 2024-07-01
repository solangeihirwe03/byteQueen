import {FC} from "react"
interface ResponseProps {
 type:any,
 content: string

}
export const Response:FC<ResponseProps> = ({type, content}) => {
  return (
    <div>
        {type === "success" && <p className="px-4 py-4 border border-green-700 text-green-700 bg-green-100 min-w-60 rounded-lg">{content}</p>}
        {type === "error" && <p className="px-4 py-4 border border-red-700 text-red-700 bg-red-100 min-w-60 rounded-lg">{content}</p>}
    </div>
  )
}
