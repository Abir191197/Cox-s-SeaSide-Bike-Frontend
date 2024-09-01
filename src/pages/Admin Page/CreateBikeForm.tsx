import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateBikeMutation } from "../../redux/api/Admin API Management/CreateBike";

// Define the onClose type
type OnClose = () => void;

// Define the form data interface
interface CreateBikeFormData {
  fullbike_name: string;
  PerHour: number;
  imgSrc: string;
  make: string;
  model: string;
  year: string;
}

interface CreateBikeFormProps {
  onClose: OnClose;
}

export default function CreateBikeForm({ onClose }: CreateBikeFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreateBikeFormData>({
    defaultValues: {
      fullbike_name: "",
      PerHour: 0,
      imgSrc: "",
      make: "",
      model: "", // Ensure this is included
      year: "", // Ensure this is included
    },
  });

  const [createBike] = useCreateBikeMutation();

  const onSubmit = async (data: CreateBikeFormData) => {
    try {
      await createBike(data).unwrap();
      if (onClose) onClose(); // Close the modal on success
      toast.success("Bike created successfully!");
    } catch (error) {
      console.error("Failed to create bike:", error);
      toast.error("Failed to create bike.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Bike</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          {/* Bike Name */}
          <div className="sm:col-span-2">
            <label
              htmlFor="fullbike_name"
              className="block text-sm font-medium text-gray-700">
              Bike Name
            </label>
            <Controller
              name="fullbike_name"
              control={control}
              rules={{ required: "Bike name is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  id="fullbike_name"
                  {...field}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
            {errors.fullbike_name && (
              <p className="text-red-500 text-sm">
                {errors.fullbike_name.message}
              </p>
            )}
          </div>

          {/* Price per Hour */}
          <div>
            <label
              htmlFor="PerHour"
              className="block text-sm font-medium text-gray-700">
              Price per Hour
            </label>
            <Controller
              name="PerHour"
              control={control}
              rules={{
                required: "Price per hour is required",
                min: { value: 0, message: "Price must be positive" },
              }}
              render={({ field }) => (
                <input
                  type="number"
                  id="PerHour"
                  {...field}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
            {errors.PerHour && (
              <p className="text-red-500 text-sm">{errors.PerHour.message}</p>
            )}
          </div>

          {/* Image Source */}
          <div className="sm:col-span-2">
            <label
              htmlFor="imgSrc"
              className="block text-sm font-medium text-gray-700">
              Image Source
            </label>
            <Controller
              name="imgSrc"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="imgSrc"
                  {...field}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>

          {/* Model */}
          <div>
            <label
              htmlFor="model"
              className="block text-sm font-medium text-gray-700">
              Model
            </label>
            <Controller
              name="model"
              control={control}
              rules={{ required: "Model is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  id="model"
                  {...field}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
            {errors.model && (
              <p className="text-red-500 text-sm">{errors.model.message}</p>
            )}
          </div>

          {/* Year */}
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <Controller
              name="year"
              control={control}
              rules={{ required: "Year is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  id="year"
                  {...field}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
            {errors.year && (
              <p className="text-red-500 text-sm">{errors.year.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none">
              Close
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {isSubmitting ? "Creating..." : "Create Bike"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
