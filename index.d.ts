type Settings = {
    cloud_name: string;
    cloud_api_key: string;
    cloud_api_secret: string;
};
type CloudinaryUploadResponse = {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: [];
    pages: number;
    bytes: number;
    type: string;
    etag: string;
    placeholder: false;
    url: string;
    secure_url: string;
    access_mode: string;
    original_filename: string;
    eager: [
        {
            transformation: string;
            width: number;
            height: number;
            url: string;
            secure_url: string;
        },
        {
            transformation: string;
            width: number;
            height: number;
            url: string;
            secure_url: string;
        }
    ];
};
export default class Cloudinary {
    private api;
    private settings;
    constructor({ cloud_name, cloud_api_key, cloud_api_secret }: Settings);
    upload(file: string | Blob, upload_preset: string, flags?: [[string, string]]): Promise<CloudinaryUploadResponse>;
    destroy(public_id: string): Promise<void>;
    private generateSignature;
}
export {};
