import { useMutation, useQuery , useQueryClient} from "@tanstack/react-query";
import customFetch from "../utils/utils";
import { toast } from "react-toastify";


export const useFetchTasks = () => {
    const {isLoading, data, isError, error} = useQuery({
        queryKey:['tasks'],
        queryFn: async () => {
           const {data} = await customFetch.get('/');
           return data;
        },
      });
      return {isLoading, isError, data, error};
}

export const useCreateTask = () => {
    const queryClient = useQueryClient();
  const {mutate:createTask, isSuccess} = useMutation({
    mutationFn:(taskTitle:string) => customFetch.post('/',{title: taskTitle}),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['tasks']}),
        toast.success('task added')
    },
    onError:(error:any) => {
        toast.error(error.response.data.msg)
    },
  });
  return {createTask, isSuccess};
};


export const useEditTask = () => {

    const queryClient = useQueryClient();

    const {mutate:editTask} = useMutation({
        mutationFn:({taskId, isDone}:any) => {
            return customFetch.patch(`/${taskId}`, { isDone })
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['tasks']})
        }
    });
    return {editTask};
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    const {mutate:deleteTask, isLoading} = useMutation({
        mutationFn:(taskId:string) => {
            return customFetch.delete(`/${taskId}`)
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['tasks']})
        }
    });
    return {deleteTask, isLoading}
}