<p><img src="https://img.shields.io/badge/downloads-32k%2Fmonth-brightgreen?style=plastic" alt="PyPI - License" /> <img src="https://img.shields.io/pypi/l/rx7?color=orange&amp;style=plastic" alt="PyPI - License" /> <img src="https://img.shields.io/badge/status-stable-success?style=plastic" alt="PyPI - License" /></p>
<h1><em>FILEX Module</em></h1>
<h3><em>(Part of rx7 library)</em></h3>
<p>&nbsp;</p>
<h3>- High API</h3>
<h3>- Do Whatever you want with High-Level functions and methods</h3>
<h3>- Special Features</h3>
<p>&nbsp;</p>
<!--<h3>See Features Preview <a href="https://unequaledbirman.htmlpasta.com/">HERE</a></h3>-->
<p><strong>&nbsp;</strong></p>
<h3>&nbsp; Class files: (Static<strong style="font-size: 14px;">&nbsp;methods)&nbsp;</strong><em style="font-size: 14px;">Actions and information about files.</em></h3>
<p><em style="font-size: 14px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Use this class when you want to do only one function on a file.</em></p>
<p><em style="font-size: 14px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Forexample when you want to just rename a file or discover it's size</em></p>

    >>> files.rename('test.txt','newname.txt')
    >>> files.size(newname.txt')
    >>> files.is_readonly('newname.txt')
    False

<table style="height: 100px; width: 574px; margin-left: 10px;" cellpadding="5px">
<tbody>
<tr>
<td style="width: 173px;">size(path)</td>
<td style="width: 387px;">
<div>
<div>Return&nbsp;size&nbsp;of&nbsp;the&nbsp;file&nbsp;in&nbsp;byte(s).&nbsp;Also&nbsp;work&nbsp;on&nbsp;directories.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 173px;">delete(path)</td>
<td style="width: 387px;">
<div>
<div>Use&nbsp;this&nbsp;to&nbsp;delete&nbsp;a&nbsp;file&nbsp;(Not&nbsp;folder).</div>
</div>
</td>
</tr>
<tr>
<td style="width: 173px;">rename(path)</td>
<td style="width: 387px;">
<div>
<div>Rename&nbsp;files&nbsp;with&nbsp;this&nbsp;function.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 173px;">abspath(path)</td>
<td style="width: 387px;">
<div>
<div>Return&nbsp;absolute&nbsp;path&nbsp;of&nbsp;given&nbsp;path.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 173px;">exists(path)</td>
<td style="width: 387px;">Return Boolean. If exists True, else: False</td>
</tr>
<tr>
<td style="width: 173px;">mdftime(path)</td>
<td style="width: 387px;">
<div>
<div>Get&nbsp;last&nbsp;modify&nbsp;time&nbsp;of&nbsp;the&nbsp;file.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 173px;">acstime(path)</td>
<td style="width: 387px;">
<div>
<div>Get&nbsp;last&nbsp;access&nbsp;time&nbsp;of&nbsp;the&nbsp;file.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 173px;">move(src,dst)</td>
<td style="width: 387px;">Move file from src to dst. (Read Doc String of copy func)</td>
</tr>
<tr>
<td style="width: 173px;">copy(src,dst,metadata=True)</td>
<td style="width: 387px;">Copy file (with metadata) from src to dst. (Also work on folders)</td>
</tr>
<tr>
<td style="width: 173px;">hide(path)</td>
<td style="width: 387px;">Hide given path. (It can be file or directory.)</td>
</tr>
<tr>
<td style="width: 173px;">read_only(path,mode=True)</td>
<td style="width: 387px;">Make file or folder read-only. (Read Doc String)</td>
</tr>
<tr>
<td style="width: 173px;">read(path)</td>
<td style="width: 387px;">Return content of the path</td>
</tr>
<tr>
<td style="width: 173px;">write(path,text='',...)</td>
<td style="width: 387px;">Same as write function.</td>
</tr>
<tr>
<td style="width: 173px;">isdir(path)</td>
<td style="width: 387px;">Return True for directory and False for others.</td>
</tr>
<tr>
<td style="width: 173px;">isfile(path)</td>
<td style="width: 387px;">Return True for file and False for others.</td>
</tr>
<tr>
<td style="width: 173px;">is_hidden(path)</td>
<td style="width: 387px;">Check whether path is hidden or not</td>
</tr>
<tr>
<td style="width: 173px;">is_readonly(path)</td>
<td style="width: 387px;">Check whether path is readonly or not</td>
</tr>
<tr>
<td style="width: 173px;">search_file(pattern,path,mode)</td>
<td style="width: 387px;">search for pattern in path (Read function doc string)</td>
</tr>
<tr>
<td style="width: 173px;">search_content(path,word)</td>
<td style="width: 387px;">Search for word in <span style="text-decoration: underline;">all</span> files in path, return list of files that contain word</td>
</tr>
<tr>
<td style="width: 173px;">mkdir(path)</td>
<td style="width: 387px;">Make directory (More than one if its possible!)</td>
</tr>
<tr>
<td style="width: 173px;">generate_tree(dir_path)</td>
<td style="width: 387px;">Returns a visual tree of dir_path</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>&nbsp; &nbsp; object File:<strong>&nbsp;</strong><em>Actions and information about files.</em></h3>
<p><em>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Use File object when you're working with a speciefic file and doing more than one methods on it.</em></p>
<p><em>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; How to use it?</em></p>

    >>> file= File('test.txt')
    >>> file.size
    2451
    >>> file.abspath
    C:/Users/rx7/Desktop/tst.txt
    >>> file.rename('newname.txt')
    >>>
<table style="height: 653px; margin-left: 45px;" width="545" cellpadding="5px">
<tbody>
<tr>
<td style="width: 193px;">__init__(self,path)</td>
<td style="width: 357px;">Creating file object.</td>
</tr>
<tr>
<td style="width: 193px;">self.size</td>
<td style="width: 357px;">
<div>
<div>size&nbsp;of&nbsp;the&nbsp;file&nbsp;in&nbsp;byte(s).&nbsp;Also&nbsp;work&nbsp;on&nbsp;directories.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 193px;">self.abspath</td>
<td style="width: 357px;">
<div>
<div>Return&nbsp;absolute&nbsp;path&nbsp;of&nbsp;given&nbsp;path.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 193px;">self.exists</td>
<td style="width: 357px;">Return Boolean. If exists True, else: False</td>
</tr>
<tr>
<td style="width: 193px;">self.mdftime</td>
<td style="width: 357px;">
<div>
<div>Get&nbsp;last&nbsp;modify&nbsp;time&nbsp;of&nbsp;the&nbsp;file.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 193px;">self.acstime</td>
<td style="width: 357px;">
<div>
<div>Get&nbsp;last&nbsp;access&nbsp;time&nbsp;of&nbsp;the&nbsp;file.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 193px;">self.type</td>
<td style="width: 357px;">
<div>
<div>'file' for files and 'dir' for directories.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 193px;">self.delete()</td>
<td style="width: 357px;">
<div>
<div>Use&nbsp;this&nbsp;to&nbsp;delete file or folder.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 193px;">self.rename(new_name)</td>
<td style="width: 357px;">
<div>
<div>Rename&nbsp;file with&nbsp;this&nbsp;method.</div>
</div>
</td>
</tr>
<tr>
<td style="width: 193px;">self.move(dst)</td>
<td style="width: 357px;">Move file from path to dst. (Read Doc String of copy func)</td>
</tr>
<tr>
<td style="width: 193px;">self.copy(dst)</td>
<td style="width: 357px;">Copy file from self.path to dst. (Also you can use it as rename)</td>
</tr>
<tr>
<td style="width: 193px;">self.hide(path)</td>
<td style="width: 357px;">Hide given path. (It can be file or directory.)</td>
</tr>
<tr>
<td style="width: 193px;">self.read_only(mode=True)</td>
<td style="width: 357px;">Make file or folder read-only. (Read Doc String)</td>
</tr>
<tr>
<td style="width: 193px;">self.content&nbsp;&nbsp;(only for files)</td>
<td style="width: 357px;">If self.type=='file': content is files.read(self.path)</td>
</tr>
<tr>
<td style="width: 193px;">self.basename&nbsp;&nbsp;(only for files)</td>
<td style="width: 357px;">Basename of file (e.g: C:/Users/file.txt ==&gt; file.txt)&nbsp;</td>
</tr>
<tr>
<td style="width: 193px;">self.ext&nbsp;&nbsp;(only for files)</td>
<td style="width: 357px;">Returns File extension if it has else None</td>
</tr>
<tr>
<td style="width: 193px;">&nbsp;</td>
<td style="width: 357px;">&nbsp;</td>
</tr>
<tr>
<td style="width: 193px;">&nbsp; &nbsp;&nbsp;<strong>if self.path is dir</strong></td>
<td style="width: 357px;">&nbsp;</td>
</tr>
<tr>
<td style="width: 193px;">self.tree</td>
<td style="width: 357px;">String which presents visual tree from path to the end.</td>
</tr>
<tr>
<td style="width: 193px;">self.tree_dirs</td>
<td style="width: 357px;">String which presents visual tree from path to the end. (Only directories)</td>
</tr>
<tr>
<td style="width: 193px;">self.MEMBERS.
<div>
<div><strong>all</strong>_<strong>exactdir</strong></div>
</div>
</td>
<td style="width: 357px;">List of <strong>all</strong>&nbsp;things those are in <strong>exact directory</strong></td>
</tr>
<tr>
<td style="width: 193px;">
<div>
<div>self.MEMBERS.<strong>files</strong>_<strong>exactdir</strong></div>
</div>
</td>
<td style="width: 357px;">List of <strong>files</strong> which are in <strong>exact directory</strong></td>
</tr>
<tr>
<td style="width: 193px;">
<div>
<div>
<div>
<div>self.MEMBERS.<strong>dirs</strong>_<strong>exactdir</strong></div>
</div>
</div>
</div>
</td>
<td style="width: 357px;">List of <strong>dirs</strong>&nbsp; which are in <strong>exact directory</strong></td>
</tr>
<tr>
<td style="width: 193px;">self.MEMBERS.<strong>files</strong>_<strong>all</strong></td>
<td style="width: 357px;">List of <strong>files</strong>&nbsp;which are in <strong>exact directory </strong>and<strong> all sub-directories</strong></td>
</tr>
<tr>
<td style="width: 193px;">
<div>
<div>
<div>
<div>self.MEMBERS.
<div>
<div><strong>files</strong>_<strong>all</strong>_<strong>sep</strong></div>
</div>
</div>
</div>
</div>
</div>
</td>
<td style="width: 357px;">List of <strong>files</strong>&nbsp;which are in <strong>exact directory </strong>and<strong> all sub-directories&nbsp;</strong>seprated by their directories</td>
</tr>
<tr>
<td style="width: 193px;">
<div>
<div>
<div>
<div>self.MEMBERS.<strong>dirs</strong>_<strong>all</strong></div>
</div>
</div>
</div>
</td>
<td style="width: 357px;">List of&nbsp;<strong>directories</strong> (<strong>Exact dir</strong> and <strong>all sub-dirs</strong>)&nbsp;</td>
</tr>
<tr>
<td style="width: 193px;">self.MEMBERS.<strong>all_all_sep</strong></td>
<td style="width: 357px;">List&nbsp; of <strong>all</strong> things in path (<strong>exact dir &amp; sub-dirs</strong>)</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h2>Recommended to:</h2>
<p><span style="text-decoration: underline; color: #000080;"><strong>&nbsp; - Using an IDE that shows Function and Class Help is highly recommended.</strong></span>&nbsp;&nbsp;<strong>(<a title="Microsoft VS Code" href="https://code.visualstudio.com/" target="_blank" rel="noopener">VS Code</a>&nbsp;-<span style="color: #ff6600;">&nbsp;</span></strong><strong><a title="Microsoft Visual Studio Code" href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener">PyCharm</a>)</strong></p>
<h4>&nbsp;</h4>
<p>&nbsp;</p>
<h2>&nbsp;Upgrade:</h2>
<h3>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;pip install --upgrade&nbsp;filex</h3>
<h3>&nbsp;</h3>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h2>Releases:</h2>
<h4>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(+ for new features, * for changes)</h4>
<table style="height: 10px; margin-left: 10px; width: 519px;" cellpadding="5">
<tbody>
<tr style="height: 42px;">
<td style="width: 119px; height: 42px; text-align: center;"><strong>Version</strong></td>
<td style="width: 153px; height: 42px; text-align: center;"><strong>Release Date</strong></td>
<td style="width: 513px; height: 42px; text-align: center;"><strong>New Features &amp; Changes</strong></td>
</tr>
<tr style="height: 25px;">
<td style="width: 119px; height: 25px; text-align-last: center; text-align: center;">
<p>1.0.0</p>
</td>
<td style="width: 153px; height: 25px; text-align: center;">15/07/2020</td>
<td style="width: 513px; height: 25px; text-align: center;">#######
<p>&nbsp;</p>
</td>
</tr>
</tbody>
</table>