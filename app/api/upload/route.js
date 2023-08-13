import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function POST(req) {
    const myS3client = new S3Client({
        region: 'us-east-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
    });
    const formData = await req.formData();
    for (const fileInfo in formData) {
        const file = fileInfo[1];
        const name = Date.now().toString() + file.name;
        const chunks = []
        for await (chunk of file.stream()) {
            chunks.push(chunk)
        }
        const buffer = Buffer.concat(chunks);
        await myS3client.send(new PutObjectCommand({
            Bucket: 'feedback-boards-uploads',
            Key: name,
            ACL: 'public-read',
            Body: buffer,
            ContentType: file.type,
        }))
        console.log('https://feedback-board-uploads.s3.amazon.com/' + name)
    }
    return Response.json('ok');
}