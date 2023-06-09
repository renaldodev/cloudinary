import { Axios } from "axios";
import sha1 from "sha1";
import { CloudinaryUploadResponse, Settings } from "../types";

class Cloudinary {
  private api: Axios;
  private settings: Settings;

  constructor({ cloud_name, cloud_api_key, cloud_api_secret }: Settings) {
    this.api = new Axios({
      baseURL: `https://api.cloudinary.com/v1_1/${cloud_name}/image`,
    });
    this.settings = {
      cloud_api_key,
      cloud_api_secret,
      cloud_name,
    };
  }
  async upload(
    file: string | Blob,
    upload_preset: string,
    flags?: [[string, string]]
  ): Promise<CloudinaryUploadResponse> {
    const data = new FormData();
    data.append("api_key", this.settings.cloud_api_key);
    data.append("api_secret", this.settings.cloud_api_secret);
    data.append("file", file);
    data.append("upload_preset", upload_preset);

    if (flags) {
      flags.map((flag) => {
        const [key, value] = flag;
        data.append(key, value);
      });
    }

    let result = (await this.api.post("/upload", data)).data;
    result = JSON.parse(result);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result as CloudinaryUploadResponse;
  }

  async destroy(public_id: string): Promise<void> {
    const data = new FormData();
    const timestamp = Date.now().toString();
    const signature = this.generateSignature(public_id, timestamp);
    data.append("invalidate", "true");
    data.append("public_id", public_id);
    data.append("timestamp", timestamp);
    data.append("signature", signature);
    data.append("api_key", this.settings.cloud_api_key);

    let result = (await this.api.post("/destroy", data)).data;
    result = JSON.parse(result);
    if (result.error) {
      throw new Error(result.error.message);
    }
  }

  private generateSignature(public_id: string, timestamp: string): string {
    const signature = sha1(
      `invalidate=true&public_id=${public_id}&timestamp=${timestamp}${this.settings.cloud_api_secret}`
    );
    return signature;
  }
}

export { Cloudinary };
