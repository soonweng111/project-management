import {Link, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_CLIENT} from "../components/queries/clientQueries";
import Spinner from "../components/Spinner";
import EditClientForm from "../components/EditClientForm";

export default function Client() {
  const {id} = useParams();
  const { loading, error, data } = useQuery(GET_CLIENT, {variables: {id}});

  if (loading) return <Spinner/>
  if (error) return <p>Something Went Wrong</p>


  return (
      <>
        <div className="mx-auto w-75 card p-5">
          <Link to={"/"} className="btn btn-light btn-sm w-25 d-inline ms-auto">Back</Link>

          <h1>{data.client.name}</h1>
          <p className="lead">{data.client.email}</p>
          <p className="lead">{data.client.phone}</p>
          <EditClientForm client={data.client}/>
        </div>
      </>
  )
}