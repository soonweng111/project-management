import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "./mutations/clientMutation";
import { GET_CLIENTS } from "./queries/clientQueries";
import { GET_PROJECTS } from "./queries/projectQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {id: client.id},
    // one of the way is to refetch from server
    refetchQueries: [{ query: GET_CLIENTS }, {query: GET_PROJECTS}],

    //Another way is to update the in mem cache
    // update(cache, {data: { deleteClient} }) {
    //   const { clients } = cache.readQuery({
    //     query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: { clients: clients.filter(client => client.id !== deleteClient.id)},
    //   });
    // }
  });

  return (
      <tr>
        <td>{ client.name }</td>
        <td>{ client.email }</td>
        <td>{ client.phone }</td>
        <td>
          <a className="btn btn-light" href={`/clients/${client.id}`}> <FaPencilAlt/> </a>
        </td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={deleteClient}>
            <FaTrash/>
          </button>
        </td>
      </tr>
  )
}