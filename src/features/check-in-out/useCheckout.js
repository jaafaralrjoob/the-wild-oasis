import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const querClient = useQueryClient();
  const { mutate: checkout, isLaoding: isChekingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      querClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("There was an error while checking out");
    },
  });
  return { checkout, isChekingOut };
}

export default useCheckout;
