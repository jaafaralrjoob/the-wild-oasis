import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,

    onSuccess: () => {
      toast.success("Setting sucessfully Edited");

      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateSettings };
}
