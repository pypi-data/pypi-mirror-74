FROM jupyter/base-notebook:213760e5674e
MAINTAINER ome-devel@lists.openmicroscopy.org.uk

USER root
RUN apt-get update -y && \
    apt-get install -y \
        build-essential \
        curl \
        git

USER jovyan
# Default workdir: /home/jovyan

# Autoupdate notebooks https://github.com/data-8/nbgitpuller
# nbval for testing reproducibility
RUN pip install git+https://github.com/MicroMOOC/nbgitpuller && \
    jupyter serverextension enable --py nbgitpuller && \
    conda install -y -q nbval

# 安装依赖
RUN mkdir .setup
ADD requirements.txt .setup/
RUN pip install -r .setup/requirements.txt

# 将项目中的notebook源代码替换到镜像中
## css+js
COPY notebook/static/ /opt/conda/lib/python3.7/site-packages/notebook/static

## 2. html file
COPY notebook/templates/ /opt/conda/lib/python3.7/site-packages/notebook/templates

# Autodetects jupyterhub and standalone modes
CMD ["start-notebook.sh"]
