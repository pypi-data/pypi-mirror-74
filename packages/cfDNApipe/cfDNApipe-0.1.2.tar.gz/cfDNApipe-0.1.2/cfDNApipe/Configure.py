# -*- coding: utf-8 -*-
"""
Created on Thu Aug  8 09:55:10 2019

@author: zhang-wei
"""

import os
import time
import urllib.request
from .cfDNA_utils import commonError, un_gz, cmdCall
from multiprocessing import cpu_count

__metaclass__ = type


class Configure:
    __config = {
        "threads": 1,
        "genome": None,
        "refdir": None,
        "outdir": None,
        "tmpdir": None,
        "finaldir": None,
        "repdir": None,
        "data": None,
        "type": "paired",
        "JavaMem": "4G",
    }

    def __init__(self,):
        """
        threads: int, how many thread to use, default: 1.
        genome: str, which genome you want to use, must be 'hg19' or 'hg38'.
        refdir: reference folder for aligner (bowtie2 or bismark) and other reference files.
        outdir: Overall output folder, it usually contains tmpdir, finaldir and repdir.
        tmpdir: Intermediate result folder.
        finaldir: Most commonly used result folder.
        repdir: Report result folder.
        data: Input data type, 'WGBS' or 'WGS'.
        type: Input sequencing type, 'paired' or 'single'.
        "JavaMem": Java memory for every thred, default: 4G.
        """
        raise commonError("Configure can not be initialized")

    # get configure names
    @classmethod
    def getConfigs(cls,):
        return cls.__config.keys()

    # get configure through name
    @classmethod
    def getConfig(cls, key):
        return cls.__config[key]

    # set configure through name
    @classmethod
    def setConfig(cls, key, val):
        if key == "threads":
            Configure.setThreads(val)
        elif key == "genome":
            Configure.setGenome(val)
        elif key == "outdir":
            Configure.setOutDir(val)
        elif key == "refdir":
            Configure.setRefDir(val)
        elif key == "data":
            Configure.setData(val)
        elif key == "type":
            Configure.setType(val)
        elif key == "JavaMem":
            Configure.setJavaMem(val)
        else:
            cls.__config[key] = val

    # set data
    @classmethod
    def setData(cls, val):
        cls.__config["data"] = val

    # get data
    @classmethod
    def getData(cls):
        return cls.__config["data"]

    # set type
    @classmethod
    def setType(cls, val):
        cls.__config["type"] = val

    # get type
    @classmethod
    def getType(cls):
        return cls.__config["type"]

    # set thread
    @classmethod
    def setThreads(cls, val):
        cls.__config["threads"] = val

    # get thread
    @classmethod
    def getThreads(cls):
        return cls.__config["threads"]

    # set JavaMem
    @classmethod
    def setJavaMem(cls, val):
        cls.__config["JavaMem"] = val

    # get JavaMem
    @classmethod
    def getJavaMem(cls):
        return cls.__config["JavaMem"]

    # set reference path
    @classmethod
    def setRefDir(cls, folderPath):
        Configure.checkFolderPath(folderPath)
        cls.__config["refdir"] = folderPath

    # get reference path
    @classmethod
    def getRefDir(cls,):
        return cls.__config["refdir"]

    # set overall output directory and sub dir
    @classmethod
    def setOutDir(cls, folderPath):
        Configure.checkFolderPath(folderPath)
        cls.__config["outdir"] = folderPath
        cls.__config["tmpdir"] = os.path.join(folderPath, "intermediate_result")
        cls.__config["finaldir"] = os.path.join(folderPath, "final_result")
        cls.__config["repdir"] = os.path.join(folderPath, "report_result")

    # get overall output path
    @classmethod
    def getOutDir(cls,):
        return cls.__config["outdir"]

    # get intermediate result path
    @classmethod
    def getTmpDir(cls,):
        return cls.__config["tmpdir"]

    # get final result path
    @classmethod
    def getFinalDir(cls,):
        return cls.__config["finaldir"]

    # get report result path
    @classmethod
    def getRepDir(cls,):
        return cls.__config["repdir"]

    # create intermediate, final and report folder
    @classmethod
    def pipeFolderInit(cls,):
        Configure.configureCheck()
        if not os.path.exists(cls.__config["tmpdir"]):
            os.mkdir(cls.__config["tmpdir"])
        if not os.path.exists(cls.__config["finaldir"]):
            os.mkdir(cls.__config["finaldir"])
        if not os.path.exists(cls.__config["repdir"]):
            os.mkdir(cls.__config["repdir"])
        Configure.checkFolderPath(cls.__config["tmpdir"])
        Configure.checkFolderPath(cls.__config["finaldir"])
        Configure.checkFolderPath(cls.__config["repdir"])

    # set genome falg
    @classmethod
    def setGenome(cls, val):
        cls.__config["genome"] = val

    # get genome falg
    @classmethod
    def getGenome(cls):
        return cls.__config["genome"]

    # get intermediate result path
    @classmethod
    def getTmpPath(cls, foldOrFileName):
        if isinstance(foldOrFileName, list):
            result = []
            for name in foldOrFileName:
                result.append(os.path.join(cls.getTmpDir(), name))
            return result
        else:
            return os.path.join(cls.getTmpDir(), foldOrFileName)

    # check folder legency, existence and accessibility
    @staticmethod
    def checkFolderPath(folderPath):
        if not os.path.isdir(os.path.abspath(folderPath)):
            raise commonError(folderPath + " is not an folder.")
        if not os.path.exists(folderPath):
            raise commonError(folderPath + " is not exist.")
        if not (os.access(folderPath, os.X_OK) and os.access(folderPath, os.W_OK)):
            raise commonError(folderPath + " is not accessible.")
        return True

    # check configure
    @classmethod
    def configureCheck(cls,):
        if Configure.getType() is None:
            raise commonError("Please set type configure before using.")
        if Configure.getData() is None:
            raise commonError("Please set data configure before using.")
        if Configure.getGenome() is None:
            raise commonError("Please set genome configure before using.")
        if Configure.getRefDir() is None:
            raise commonError("Please set reference configure before using.")
        if Configure.getConfig("tmpdir") is None:
            raise commonError("Please set Output configure before using.")
        if Configure.getConfig("finaldir") is None:
            raise commonError("Please set Output configure before using.")
        if Configure.getConfig("repdir") is None:
            raise commonError("Please set Output configure before using.")
        if Configure.getConfig("outdir") is None:
            raise commonError("Please set Output configure before using.")

    # check configure
    @classmethod
    def refCheck(cls, build=False):
        Configure.configureCheck()
        Configure.genomeRefCheck(build=build)
        Configure.gitOverAllCheck(build=build)
        if Configure.getData() == "WGBS":
            Configure.bismkrefcheck(build)
            print("Background reference check finished!")
        elif Configure.getData() == "WGS":
            Configure.bt2refcheck(build)
            print("Background reference check finished!")
        else:
            print("No reference is specified.")

    # bismark ref check
    @classmethod
    def bismkrefcheck(cls, build):
        # check Bismark reference
        CTfiles = [
            os.path.join(Configure.getRefDir(), "Bisulfite_Genome/CT_conversion/" + x)
            for x in [
                "BS_CT.1.bt2",
                "BS_CT.2.bt2",
                "BS_CT.3.bt2",
                "BS_CT.4.bt2",
                "BS_CT.rev.1.bt2",
                "BS_CT.rev.2.bt2",
                "genome_mfa.CT_conversion.fa",
            ]
        ]
        BAfiles = [
            os.path.join(Configure.getRefDir(), "Bisulfite_Genome/GA_conversion/" + x)
            for x in [
                "BS_GA.1.bt2",
                "BS_GA.2.bt2",
                "BS_GA.3.bt2",
                "BS_GA.4.bt2",
                "BS_GA.rev.1.bt2",
                "BS_GA.rev.2.bt2",
                "genome_mfa.GA_conversion.fa",
            ]
        ]
        bismkRef = CTfiles + BAfiles
        if not all(map(os.path.exists, bismkRef)):
            print("Bismark index file do not exist or missing some files!")
            if build:
                cmdline = "bismark_genome_preparation " + Configure.getRefDir()
                print("Start building bismark reference......")
                print("Now, running " + cmdline)
                cmdCall(cmdline)
                print("Finished!")

    # bowtie2 ref check
    @classmethod
    def bt2refcheck(cls, build):
        # bowtie2 ref check
        extension = [".1.bt2", ".2.bt2", ".3.bt2", ".4.bt2", ".rev.1.bt2", ".rev.2.bt2"]
        bt2Ref = [
            os.path.join(Configure.getRefDir(), Configure.getGenome() + x)
            for x in extension
        ]
        if not all(map(os.path.exists, bt2Ref)):
            print("Bowtie2 index file do not exist or missing some files!")
            if build:
                cmdline = (
                    "bowtie2-build -f --threads "
                    + str(Configure.getThreads())
                    + " "
                    + Configure.getConfig("genome.seq")
                    + " "
                    + os.path.join(Configure.getRefDir(), Configure.getGenome())
                )
                print("Start building Bowtie2 reference......")
                print("Now, running " + cmdline)
                cmdCall(cmdline)
                print("Finished!")

    # check genome reference
    @classmethod
    def genomeRefCheck(cls, build):
        Configure.setConfig(
            "genome.seq",
            os.path.join(Configure.getRefDir(), Configure.getGenome() + ".fa"),
        )
        Configure.setConfig(
            "genome.idx.fai",
            os.path.join(
                Configure.getRefDir(), Configure.getConfig("genome.seq") + ".fai"
            ),
        )
        Configure.setConfig(
            "genome.idx.dict",
            os.path.join(Configure.getRefDir(), Configure.getGenome() + ".dict"),
        )

        if not os.path.exists(Configure.getConfig("genome.seq")):
            print(
                "Reference file " + Configure.getConfig("genome.seq") + " do not exist!"
            )
            if build:
                url = (
                    "https://hgdownload.soe.ucsc.edu/goldenPath/"
                    + Configure.getGenome()
                    + "/bigZips/"
                    + Configure.getGenome()
                    + ".fa.gz"
                )
                print("Download from URL:" + url + "......")
                urllib.request.urlretrieve(
                    url,
                    os.path.join(
                        Configure.getRefDir(), Configure.getGenome() + ".fa.gz"
                    ),
                )
                print("Uncompressing......")
                un_gz(
                    os.path.join(
                        Configure.getRefDir(), Configure.getGenome() + ".fa.gz"
                    )
                )
                print("Finished!")

        if not os.path.exists(Configure.getConfig("genome.idx.fai")):
            print(
                "Reference file "
                + Configure.getConfig("genome.idx.fai")
                + " do not exist!"
            )
            if build:
                cmdline = "samtools faidx " + Configure.getConfig("genome.seq")
                print("Start building .fai index for fasta reference......")
                print("Now, running " + cmdline)
                cmdCall(cmdline)
                print("Finished!")

        if not os.path.exists(Configure.getConfig("genome.idx.dict")):
            print(
                "Reference file "
                + Configure.getConfig("genome.idx.dict")
                + " do not exist!"
            )
            if build:
                cmdline = (
                    "gatk CreateSequenceDictionary --REFERENCE "
                    + Configure.getConfig("genome.seq")
                )
                print("Start building .dict index for fasta reference......")
                print("Now, running " + cmdline)
                cmdCall(cmdline)
                print("Finished!")

    # check github.io file
    @classmethod
    def githubIOFile(cls, configureName, prefix, suffix, gitPath, build):
        fileName = prefix + Configure.getGenome() + suffix
        fileNameGZ = fileName + ".gz"
        Configure.setConfig(
            configureName, os.path.join(Configure.getRefDir(), fileName),
        )
        if not os.path.exists(Configure.getConfig(configureName)):
            print(
                "Reference file "
                + Configure.getConfig(configureName)
                + " do not exist!"
            )
            if build:
                url = (
                    "https://honchkrow.github.io/cfDNAReferences/"
                    + gitPath
                    + "/"
                    + fileNameGZ
                )
                print("Download from URL:" + url + "......")
                urllib.request.urlretrieve(
                    url, os.path.join(Configure.getRefDir(), fileNameGZ),
                )
                print("Uncompressing......")
                un_gz(os.path.join(Configure.getRefDir(), fileNameGZ))
                print("Finished!")
                print("Now, waitting for next step......")
                time.sleep(10)

    # check github.io file
    @classmethod
    def gitOverAllCheck(cls, build):
        Configure.githubIOFile(
            configureName="chromSizes",
            prefix="",
            suffix=".chrom.sizes",
            gitPath="hg19",
            build=build,
        )
        Configure.githubIOFile(
            configureName="CpGisland",
            prefix="cpgIsland_",
            suffix=".bed",
            gitPath="hg19",
            build=build,
        )
        Configure.githubIOFile(
            configureName="cytoBand",
            prefix="cytoBand_",
            suffix=".txt",
            gitPath="hg19",
            build=build,
        )
        Configure.githubIOFile(
            configureName="OCF",
            prefix="OCF_",
            suffix=".bed",
            gitPath="hg19",
            build=build,
        )
        Configure.githubIOFile(
            configureName="PlasmaMarker",
            prefix="plasmaMarkers_",
            suffix=".txt",
            gitPath="hg19",
            build=build,
        )
        Configure.githubIOFile(
            configureName="Blacklist",
            prefix="",
            suffix="-blacklist.v2.bed",
            gitPath="hg19",
            build=build,
        )
        Configure.githubIOFile(
            configureName="Gaps",
            prefix="",
            suffix=".gaps.bed",
            gitPath="hg19",
            build=build,
        )
        Configure.githubIOFile(
            configureName="refFlat",
            prefix="refFlat_",
            suffix=".txt",
            gitPath="hg19",
            build=build,
        )
        Configure.githubIOFile(
            configureName="access-5kb-mappable",
            prefix="access-5kb-mappable.",
            suffix=".bed",
            gitPath="hg19",
            build=build,
        )


def pipeConfigure(
    threads=(cpu_count() / 2),
    genome=None,
    refdir=None,
    outdir=None,
    data=None,
    type=None,
    JavaMem=None,
    build=False,
):
    """
    This function is used for setting Configures.

    pipeConfigure(threads=(cpu_count() / 2), genome=None, refdir=None, outdir=None, data=None, type=None, build=False)
    {P}arameters:
        threads: int, how many thread to use, default: 1.
        genome: str, which genome you want to use, must be 'hg19' or 'hg38'.
        refdir: reference folder for aligner (bowtie2 or bismark) and other reference files.
        outdir: Overall result folder, it usually contains tmpdir, finaldir and repdir.
        data: Input data type, 'WGBS' or 'WGS'.
        type: Input sequencing type, 'paired' or 'single'.
        JavaMem: Java memory for every thred, "10G" like.
        build: Whether checking reference and building reference once not detect.
    """

    Configure.setData(data)
    Configure.setThreads(threads)
    Configure.setGenome(genome)
    Configure.setRefDir(refdir)
    Configure.setOutDir(outdir)
    Configure.setType(type)
    Configure.setJavaMem(JavaMem)
    Configure.pipeFolderInit()
    Configure.refCheck(build=build)
