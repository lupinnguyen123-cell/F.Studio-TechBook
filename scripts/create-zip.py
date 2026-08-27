import zipfile
import os

def create_project_zip():
    zip_path = os.path.join('public', 'so-tay-ky-thuat.zip')
    
    # Ensure public dir exists
    os.makedirs('public', exist_ok=True)
    
    if os.path.exists(zip_path):
        os.remove(zip_path)
        
    include_dirs = ['src', 'public']
    include_files = [
        'package.json',
        'package-lock.json',
        'tsconfig.json',
        'vite.config.ts',
        'server.ts',
        'index.html',
        '.env.example',
        'metadata.json',
        'README.md'
    ]
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Include top-level files
        for f in include_files:
            if os.path.isfile(f):
                zipf.write(f, f)
                
        # Include directories
        for d in include_dirs:
            if os.path.isdir(d):
                for root, dirs, files in os.walk(d):
                    # Skip node_modules, git, etc.
                    dirs[:] = [sub for sub in dirs if sub not in ['node_modules', '.git', 'dist', '.gemini']]
                    for file in files:
                        if file.endswith('.zip'):
                            continue
                        file_path = os.path.join(root, file)
                        arcname = os.path.relpath(file_path, '.')
                        zipf.write(file_path, arcname)

    print(f"ZIP archive created successfully at {zip_path} ({os.path.getsize(zip_path)} bytes)")

if __name__ == '__main__':
    create_project_zip()
