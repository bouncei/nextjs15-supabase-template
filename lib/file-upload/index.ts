import { toast } from "sonner";
import { BucketFolderEnum } from "@/constants/enums";
import { createClient } from "@/lib/supabase/clent";
import { BUCKET_NAME, MAX_IMAGE_SIZE_MB, MAX_VIDEO_SIZE_MB } from "@/constants";

const supabase = createClient();

export const uploadImage = async (
  file: File,
  folder: keyof typeof BucketFolderEnum
): Promise<string | null> => {
  if (!file) {
    return null;
  }

  try {
    // Check file size (limit: 10MB)
    if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      throw new Error("File size exceeds 10MB limit.");
    }

    // Create a unique filename using timestamp
    const fileExt = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    // Upload the file to Supabase bucket
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false, // Prevent overwriting
      });

    if (error) throw error;

    // Get the public URL of the uploaded image
    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);

    return data.publicUrl;
  } catch (error: any) {
    const errorMessage = error.message || "An error occurred";
    console.error("Image upload error:", errorMessage);

    toast.error(errorMessage);
    return null;
  }
};

export const uploadVideo = async (
  file: File,
  folder: string
): Promise<string | null> => {
  if (!file) {
    throw new Error("No file provided");
  }

  try {
    if (file.size > MAX_VIDEO_SIZE_MB * 1024 * 1024) {
      throw new Error("File size exceeds 40MB limit");
    }

    // Create a unique filename using timestamp
    const fileExt = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    // Get the public URL of the uploaded image
    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);

    return data.publicUrl;
  } catch (error: any) {
    const errorMessage = error.message || "An error occurred";
    console.error("Video upload error:", errorMessage);

    toast.error(errorMessage);
    return null;
  }
};
