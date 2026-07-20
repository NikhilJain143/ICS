import cv2
import os

video_path = '/Users/hello/Downloads/ICE/public/audi-video.mp4'
output_path = '/Users/hello/Downloads/ICE/public/poster.jpg'

print(f"Opening video {video_path}...")
cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print("Error opening video stream or file")
    exit(1)

ret, frame = cap.read()
if ret:
    print(f"Captured first frame! Size: {frame.shape}")
    # Save as highly compressed JPEG
    cv2.imwrite(output_path, frame, [int(cv2.IMWRITE_JPEG_QUALITY), 75])
    print(f"Saved poster to {output_path}")
else:
    print("Failed to capture frame")

cap.release()
