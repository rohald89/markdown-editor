import ReactMarkdown from 'react-markdown'

import { useNotes } from "../../context"


const Content = ({preview}) => {
  const { getActiveNote, updateNote} = useNotes();

  const note = getActiveNote();

  return (
    <> {
        preview ? (
            <ReactMarkdown className="preview py-4 px-5 space-y-4 bg-grey-200 text-grey-500 dark:bg-grey-1000 h-full">
                {note.content}
            </ReactMarkdown>
        ):(

        <textarea
        className="h-full w-full p-4 outline-none text-grey-700 dark:bg-grey-1000 dark:text-grey-400"
        name="content"
        value={note.content}
        onChange={updateNote}
        >

        </textarea>
  )}
  </>
)}
export default Content
