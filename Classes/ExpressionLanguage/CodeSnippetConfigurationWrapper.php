<?php


namespace DanielGoerz\FsCodeSnippet\ExpressionLanguage;


use DanielGoerz\FsCodeSnippet\Utility\FsCodeSnippetConfigurationUtility;

/**
 * Class CodeSnippetConfigurationWrapper
 *
 * @author Daniel Goerz <usetypo3@posteo.de>
 */
class CodeSnippetConfigurationWrapper
{
    /**
     * @return bool
     */
    public function allLanguages(): bool
    {
        return FsCodeSnippetConfigurationUtility::isAllLanguagesEnabled();
    }
}